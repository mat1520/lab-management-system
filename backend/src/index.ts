import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import { config } from './config';
import { errorHandler } from './middleware/errorHandler';
import { routes } from './routes';
import { logger } from './utils/logger';
import { setupSocketHandlers } from './socket';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: config.frontendUrl,
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(helmet());
app.use(cors({
  origin: config.frontendUrl,
  credentials: true
}));
app.use(express.json());
app.use(compression());
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // límite de 100 peticiones por ventana
});
app.use(limiter);

// Rutas
app.use('/api', routes);

// Manejador de errores
app.use(errorHandler);

// Conexión a MongoDB
mongoose.connect(config.mongodbUri)
  .then(() => {
    logger.info('Conectado a MongoDB');
    
    // Iniciar servidor
    httpServer.listen(config.port, () => {
      logger.info(`Servidor iniciado en puerto ${config.port}`);
    });
  })
  .catch((error) => {
    logger.error('Error conectando a MongoDB:', error);
    process.exit(1);
  });

// Configurar Socket.IO
setupSocketHandlers(io);

// Manejo de señales de terminación
process.on('SIGTERM', () => {
  logger.info('Señal SIGTERM recibida. Cerrando servidor...');
  httpServer.close(() => {
    mongoose.connection.close(false, () => {
      logger.info('Servidor cerrado. Conexión a MongoDB cerrada.');
      process.exit(0);
    });
  });
}); 
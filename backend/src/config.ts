import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/securelearn',
  redisUri: process.env.REDIS_URI || 'redis://localhost:6379',
  rabbitmqUri: process.env.RABBITMQ_URI || 'amqp://localhost:5672',
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  nodeEnv: process.env.NODE_ENV || 'development',
  
  // Configuración de seguridad
  security: {
    bcryptSaltRounds: 10,
    jwtExpiration: '24h',
    refreshTokenExpiration: '7d',
    maxLoginAttempts: 5,
    lockoutDuration: 15 * 60 * 1000, // 15 minutos
  },
  
  // Configuración de laboratorios
  labs: {
    maxConcurrentLabs: 3,
    labTimeout: 30 * 60 * 1000, // 30 minutos
    cleanupInterval: 5 * 60 * 1000, // 5 minutos
  },
  
  // Configuración de logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    format: process.env.LOG_FORMAT || 'json',
  },
  
  // Configuración de rate limiting
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // límite de 100 peticiones por ventana
  },
  
  // Configuración de caché
  cache: {
    ttl: 60 * 60, // 1 hora
    checkPeriod: 60 * 60, // 1 hora
  },
  
  // Configuración de email
  email: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
}; 
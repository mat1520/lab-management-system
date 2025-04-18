import winston from 'winston';
import { config } from '../config';

const { combine, timestamp, printf, colorize } = winston.format;

// Formato personalizado para los logs
const logFormat = printf(({ level, message, timestamp, ...metadata }) => {
  let msg = `${timestamp} [${level}]: ${message}`;
  
  if (Object.keys(metadata).length > 0) {
    msg += ` ${JSON.stringify(metadata)}`;
  }
  
  return msg;
});

// Configuración del logger
export const logger = winston.createLogger({
  level: config.logging.level,
  format: combine(
    timestamp(),
    config.logging.format === 'json' ? winston.format.json() : logFormat
  ),
  transports: [
    // Consola con colores
    new winston.transports.Console({
      format: combine(
        colorize(),
        timestamp(),
        logFormat
      )
    }),
    
    // Archivo para errores
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    
    // Archivo para todos los logs
    new winston.transports.File({
      filename: 'logs/combined.log',
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    })
  ]
});

// Si no estamos en producción, también mostramos los logs en la consola
if (config.nodeEnv !== 'production') {
  logger.add(new winston.transports.Console({
    format: combine(
      colorize(),
      timestamp(),
      logFormat
    )
  }));
}

// Exportamos una función helper para logs estructurados
export const logWithMetadata = (level: string, message: string, metadata: Record<string, any> = {}) => {
  logger.log(level, message, metadata);
};

// Exportamos funciones helper específicas
export const logError = (message: string, error?: Error, metadata: Record<string, any> = {}) => {
  const errorMetadata = {
    ...metadata,
    error: error ? {
      message: error.message,
      stack: error.stack,
      name: error.name
    } : undefined
  };
  
  logger.error(message, errorMetadata);
};

export const logInfo = (message: string, metadata: Record<string, any> = {}) => {
  logger.info(message, metadata);
};

export const logWarning = (message: string, metadata: Record<string, any> = {}) => {
  logger.warn(message, metadata);
};

export const logDebug = (message: string, metadata: Record<string, any> = {}) => {
  logger.debug(message, metadata);
}; 
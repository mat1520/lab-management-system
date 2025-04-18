import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

// Clase base para errores personalizados
export class AppError extends Error {
  constructor(
    public statusCode: number,
    public message: string,
    public isOperational = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

// Errores específicos
export class ValidationError extends AppError {
  constructor(message: string) {
    super(400, message);
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'No autorizado') {
    super(401, message);
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = 'Prohibido') {
    super(403, message);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Recurso no encontrado') {
    super(404, message);
  }
}

// Manejador de errores global
export const errorHandler = (
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Si es un error operacional (AppError)
  if (err instanceof AppError) {
    logger.warn(`${err.statusCode} - ${err.message}`, {
      path: req.path,
      method: req.method,
      ip: req.ip
    });

    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    });
  }

  // Si es un error de validación de Mongoose
  if (err.name === 'ValidationError') {
    logger.warn(`400 - Error de validación`, {
      path: req.path,
      method: req.method,
      error: err
    });

    return res.status(400).json({
      status: 'error',
      message: 'Error de validación',
      errors: err
    });
  }

  // Si es un error de JWT
  if (err.name === 'JsonWebTokenError') {
    logger.warn(`401 - Token inválido`, {
      path: req.path,
      method: req.method
    });

    return res.status(401).json({
      status: 'error',
      message: 'Token inválido'
    });
  }

  // Si es un error de JWT expirado
  if (err.name === 'TokenExpiredError') {
    logger.warn(`401 - Token expirado`, {
      path: req.path,
      method: req.method
    });

    return res.status(401).json({
      status: 'error',
      message: 'Token expirado'
    });
  }

  // Para otros errores no manejados
  logger.error('Error no manejado', {
    error: err,
    path: req.path,
    method: req.method,
    ip: req.ip
  });

  return res.status(500).json({
    status: 'error',
    message: 'Error interno del servidor',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
}; 
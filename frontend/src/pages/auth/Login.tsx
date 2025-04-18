import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/authSlice';

interface LoginCredentials {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await dispatch(login(formData)).unwrap();
      navigate('/');
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, intente nuevamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden p-6 bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-gray-900 dark:to-slate-900">
      {/* Círculos decorativos */}
      <div className="accent-circle top-[-20%] left-[-10%]"></div>
      <div className="accent-circle bottom-[-20%] right-[-10%]"></div>
      
      <div className="glass-effect w-full max-w-md p-8 rounded-2xl relative z-10">
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-4xl font-bold text-gradient">
            ¡Bienvenido!
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Inicia sesión para continuar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-1">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="input-effect"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="input-effect"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          {error && (
            <div className="error-message" role="alert">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="button-gradient w-full py-3 px-4"
          >
            Iniciar Sesión
          </button>

          <p className="text-center text-gray-600 dark:text-gray-400">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="link-hover">
              Regístrate aquí
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login; 
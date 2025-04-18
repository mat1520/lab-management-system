import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/authSlice';
import { AppDispatch } from '../../store';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(login(formData));
      navigate('/dashboard');
    } catch (err) {
      setError('Error al iniciar sesión. Por favor, intente nuevamente.');
    }
  };

  return (
    <div className="auth-container">
      <div className="accent-circle -top-20 -left-20" />
      <div className="accent-circle -bottom-20 -right-20" />
      
      <div className="auth-form-container glass-effect">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Bienvenido de nuevo</h1>
          <p className="text-gray-600">Inicia sesión para continuar</p>
        </div>

        {error && (
          <div className="error-message mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-effect"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-effect"
              placeholder="••••••••"
              required
            />
          </div>

          <button type="submit" className="button-gradient w-full">
            Iniciar sesión
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="link-hover">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login; 
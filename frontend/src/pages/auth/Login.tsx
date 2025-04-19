import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../store/slices/authSlice';
import { RootState, AppDispatch } from '../../store';
import styles from './Auth.module.css';

const Login: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { isAuthenticated, loading, error, user } = useSelector((state: RootState) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(login(formData)).unwrap();
      navigate('/dashboard');
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      
      <div className={styles.glassContainer}>
        <h1>Iniciar Sesión</h1>
        
        {error && <div className={styles.error}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="ejemplo@correo.com"
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="********"
              className={styles.input}
            />
          </div>

          <button 
            type="submit" 
            className={`${styles.submitButton} ${loading ? styles.loading : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                Iniciando sesión...
              </>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        <div className={styles.infoContainer}>
          <h3>Credenciales de Prueba:</h3>
          <div className={styles.credentialsGrid}>
            <div className={styles.credentialCard}>
              <h4>Administrador</h4>
              <p>Email: admin@example.com</p>
              <p>Contraseña: admin123</p>
            </div>
            <div className={styles.credentialCard}>
              <h4>Estudiante (Ing. Sistemas)</h4>
              <p>Email: juan@estudiante.com</p>
              <p>Contraseña: estudiante123</p>
            </div>
            <div className={styles.credentialCard}>
              <h4>Estudiante (Ing. Industrial)</h4>
              <p>Email: maria@estudiante.com</p>
              <p>Contraseña: estudiante123</p>
            </div>
          </div>
        </div>

        <p className={styles.switchText}>
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Login; 
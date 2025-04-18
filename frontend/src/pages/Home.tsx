import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>Bienvenido al Sistema de Gestión de Laboratorios</h1>
        <p>Gestiona tus laboratorios de manera eficiente y segura</p>
        <div className={styles.cta}>
          <Link to="/register" className={styles.primaryButton}>
            Comenzar Ahora
          </Link>
          <Link to="/login" className={styles.secondaryButton}>
            Iniciar Sesión
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <h2>Características Principales</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <h3>Gestión de Laboratorios</h3>
            <p>Administra múltiples laboratorios desde una única plataforma</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Control de Acceso</h3>
            <p>Sistema de autenticación seguro y roles de usuario</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Reportes en Tiempo Real</h3>
            <p>Monitorea el estado de tus laboratorios en tiempo real</p>
          </div>
          <div className={styles.featureCard}>
            <h3>Notificaciones</h3>
            <p>Recibe alertas y actualizaciones importantes</p>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statCard}>
          <h3>100+</h3>
          <p>Laboratorios Gestionados</p>
        </div>
        <div className={styles.statCard}>
          <h3>1000+</h3>
          <p>Usuarios Activos</p>
        </div>
        <div className={styles.statCard}>
          <h3>24/7</h3>
          <p>Soporte Disponible</p>
        </div>
      </section>
    </div>
  );
};

export default Home; 
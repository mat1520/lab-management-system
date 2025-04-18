import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptop, FaUsers, FaChartLine } from 'react-icons/fa';
import styles from './Home.module.css';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Sistema de Gestión de Laboratorios</h1>
          <p className={styles.heroSubtitle}>
            Gestiona tus laboratorios de manera eficiente y segura con nuestra plataforma integral
          </p>
          <Link to="/register" className={styles.button}>
            Comenzar Ahora
          </Link>
          <Link to="/login" className={`${styles.button} ${styles.buttonOutline}`}>
            Iniciar Sesión
          </Link>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.featuresGrid}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaLaptop />
            </div>
            <h3>Gestión de Equipos</h3>
            <p>Control completo sobre el inventario y estado de los equipos de laboratorio</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaUsers />
            </div>
            <h3>Control de Acceso</h3>
            <p>Sistema de permisos y roles para garantizar la seguridad de los laboratorios</p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaChartLine />
            </div>
            <h3>Reportes y Análisis</h3>
            <p>Estadísticas detalladas y reportes personalizados sobre el uso de laboratorios</p>
          </div>
        </div>
      </section>

      <section className={styles.stats}>
        <div className={styles.statsGrid}>
          <div>
            <div className={styles.statNumber}>100+</div>
            <p>Laboratorios Gestionados</p>
          </div>
          <div>
            <div className={styles.statNumber}>1000+</div>
            <p>Usuarios Activos</p>
          </div>
          <div>
            <div className={styles.statNumber}>99.9%</div>
            <p>Tiempo de Actividad</p>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>¿Listo para empezar?</h2>
          <p>Únete a nuestra plataforma y optimiza la gestión de tus laboratorios</p>
          <Link to="/register" className={styles.button}>
            Crear Cuenta Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 
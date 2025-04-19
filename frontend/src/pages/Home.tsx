import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Home.module.css';
import { FiDatabase, FiLock, FiBarChart2, FiBell } from 'react-icons/fi';

const Home: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeIn} className={styles.title}>
            Sistema de Gestión de
            <span className={styles.highlight}> Laboratorios</span>
          </motion.h1>
          <motion.p variants={fadeIn} className={styles.subtitle}>
            Optimiza y controla tus laboratorios con nuestra plataforma moderna y eficiente
          </motion.p>
          <motion.div variants={fadeIn} className={styles.ctaContainer}>
            <Link to="/register" className={styles.primaryButton}>
              Comenzar Ahora
            </Link>
            <Link to="/login" className={styles.secondaryButton}>
              Iniciar Sesión
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className={styles.heroImage}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.glassCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardDot} style={{ background: '#FF605C' }}></div>
              <div className={styles.cardDot} style={{ background: '#FFBD44' }}></div>
              <div className={styles.cardDot} style={{ background: '#00CA4E' }}></div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <h3>Laboratorios</h3>
                  <p>12 Activos</p>
                </div>
                <div className={styles.statItem}>
                  <h3>Usuarios</h3>
                  <p>234 Online</p>
                </div>
                <div className={styles.statItem}>
                  <h3>Equipos</h3>
                  <p>89% Disponible</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.sectionTitle}
        >
          Características Principales
        </motion.h2>
        <motion.div
          className={styles.featureGrid}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className={styles.featureCard} variants={fadeIn}>
            <FiDatabase className={styles.featureIcon} />
            <h3>Gestión de Laboratorios</h3>
            <p>Administra múltiples laboratorios desde una única plataforma intuitiva</p>
          </motion.div>
          <motion.div className={styles.featureCard} variants={fadeIn}>
            <FiLock className={styles.featureIcon} />
            <h3>Control de Acceso</h3>
            <p>Sistema de autenticación seguro con diferentes roles de usuario</p>
          </motion.div>
          <motion.div className={styles.featureCard} variants={fadeIn}>
            <FiBarChart2 className={styles.featureIcon} />
            <h3>Reportes en Tiempo Real</h3>
            <p>Monitorea el estado de tus laboratorios con actualizaciones instantáneas</p>
          </motion.div>
          <motion.div className={styles.featureCard} variants={fadeIn}>
            <FiBell className={styles.featureIcon} />
            <h3>Notificaciones</h3>
            <p>Recibe alertas importantes y mantente informado en todo momento</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className={styles.stats}>
        <motion.div
          className={styles.statsGrid}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div className={styles.statCard} variants={fadeIn}>
            <h3>100+</h3>
            <p>Laboratorios Gestionados</p>
          </motion.div>
          <motion.div className={styles.statCard} variants={fadeIn}>
            <h3>1000+</h3>
            <p>Usuarios Activos</p>
          </motion.div>
          <motion.div className={styles.statCard} variants={fadeIn}>
            <h3>24/7</h3>
            <p>Soporte Disponible</p>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <motion.div
          className={styles.ctaContent}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>¿Listo para comenzar?</h2>
          <p>Únete a nuestra plataforma y optimiza la gestión de tus laboratorios</p>
          <Link to="/register" className={styles.primaryButton}>
            Crear Cuenta Gratis
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home; 
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className={styles.dashboard}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <p>Bienvenido, {user?.name}</p>
      </header>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h3>Laboratorios Activos</h3>
          <p className={styles.number}>5</p>
          <p className={styles.label}>En uso actualmente</p>
        </div>

        <div className={styles.card}>
          <h3>Equipos Disponibles</h3>
          <p className={styles.number}>12</p>
          <p className={styles.label}>Listos para uso</p>
        </div>

        <div className={styles.card}>
          <h3>Reservas Hoy</h3>
          <p className={styles.number}>8</p>
          <p className={styles.label}>Próximas reservas</p>
        </div>

        <div className={styles.card}>
          <h3>Alertas</h3>
          <p className={styles.number}>2</p>
          <p className={styles.label}>Requieren atención</p>
        </div>
      </div>

      <section className={styles.recentActivity}>
        <h2>Actividad Reciente</h2>
        <div className={styles.activityList}>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>🔧</div>
            <div className={styles.activityContent}>
              <h4>Mantenimiento Programado</h4>
              <p>Lab 101 - 15:00</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>📝</div>
            <div className={styles.activityContent}>
              <h4>Nueva Reserva</h4>
              <p>Lab 203 - 16:30</p>
            </div>
          </div>
          <div className={styles.activityItem}>
            <div className={styles.activityIcon}>⚠️</div>
            <div className={styles.activityContent}>
              <h4>Alerta de Equipo</h4>
              <p>Lab 105 - Equipo requiere calibración</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard; 
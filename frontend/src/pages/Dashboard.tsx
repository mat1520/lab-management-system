import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="dashboard-container">
      <div className="accent-circle accent-circle-top" />
      <div className="accent-circle accent-circle-bottom" />
      
      <div className="dashboard-card">
        <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Bienvenido, {user?.name}</h2>
          <p className="text-gray-300">
            Este es tu panel de control donde podrás gestionar los laboratorios y recursos.
          </p>
        </div>

        <div className="dashboard-stats">
          <div className="stat-card">
            <h3 className="text-lg font-semibold mb-2">Laboratorios Activos</h3>
            <p className="stat-value">5</p>
            <p className="text-sm text-gray-400">En funcionamiento</p>
          </div>
          
          <div className="stat-card">
            <h3 className="text-lg font-semibold mb-2">Equipos Disponibles</h3>
            <p className="stat-value">12</p>
            <p className="text-sm text-gray-400">Listos para usar</p>
          </div>
          
          <div className="stat-card">
            <h3 className="text-lg font-semibold mb-2">Reservas Pendientes</h3>
            <p className="stat-value">3</p>
            <p className="text-sm text-gray-400">Por confirmar</p>
          </div>
        </div>

        <div className="card-grid">
          <div className="feature-card">
            <h3 className="text-lg font-semibold mb-3">Gestión de Laboratorios</h3>
            <p className="text-gray-300 mb-4">
              Administra los laboratorios, su estado y disponibilidad.
            </p>
            <button className="button-gradient">Gestionar</button>
          </div>

          <div className="feature-card">
            <h3 className="text-lg font-semibold mb-3">Reservas</h3>
            <p className="text-gray-300 mb-4">
              Revisa y aprueba las solicitudes de reserva.
            </p>
            <button className="button-gradient">Ver Reservas</button>
          </div>

          <div className="feature-card">
            <h3 className="text-lg font-semibold mb-3">Reportes</h3>
            <p className="text-gray-300 mb-4">
              Genera informes y estadísticas de uso.
            </p>
            <button className="button-gradient">Ver Reportes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
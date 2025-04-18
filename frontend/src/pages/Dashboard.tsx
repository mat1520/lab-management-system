import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Dashboard: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="glass-effect p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Bienvenido, {user?.name}</h2>
          <p className="text-gray-300">
            Este es tu panel de control donde podrás gestionar los laboratorios y recursos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Laboratorios Activos</h3>
            <p className="text-3xl font-bold text-primary">5</p>
          </div>
          
          <div className="glass-effect p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Equipos Disponibles</h3>
            <p className="text-3xl font-bold text-accent">12</p>
          </div>
          
          <div className="glass-effect p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Reservas Pendientes</h3>
            <p className="text-3xl font-bold text-secondary">3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
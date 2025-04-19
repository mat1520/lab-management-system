import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBeaker, FiCalendar, FiAlertTriangle, FiClock, FiTool, FiUsers } from 'react-icons/fi';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: 'Laboratorios Activos',
      value: '5',
      description: 'En uso actualmente',
      icon: <FiBeaker className="w-6 h-6 text-primary" />,
      color: 'bg-primary/10',
    },
    {
      title: 'Equipos Disponibles',
      value: '12',
      description: 'Listos para uso',
      icon: <FiTool className="w-6 h-6 text-secondary" />,
      color: 'bg-secondary/10',
    },
    {
      title: 'Reservas Hoy',
      value: '8',
      description: 'Próximas reservas',
      icon: <FiCalendar className="w-6 h-6 text-accent" />,
      color: 'bg-accent/10',
    },
    {
      title: 'Alertas',
      value: '2',
      description: 'Requieren atención',
      icon: <FiAlertTriangle className="w-6 h-6 text-error" />,
      color: 'bg-error/10',
    },
  ];

  const recentActivity = [
    {
      type: 'Mantenimiento Programado',
      location: 'Lab 101',
      time: '15:00',
      icon: <FiTool className="w-5 h-5 text-primary" />,
    },
    {
      type: 'Nueva Reserva',
      location: 'Lab 203',
      time: '16:30',
      icon: <FiCalendar className="w-5 h-5 text-secondary" />,
    },
    {
      type: 'Alerta de Equipo',
      location: 'Lab 105',
      time: 'Ahora',
      icon: <FiAlertTriangle className="w-5 h-5 text-error" />,
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-text-light mt-2">
            Bienvenido al sistema de gestión de laboratorios
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-surface shadow-card hover:shadow-hover transition-shadow duration-300"
            >
              <div className={`rounded-full w-12 h-12 flex items-center justify-center ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-text mb-1">{stat.value}</h3>
              <p className="font-medium text-text mb-1">{stat.title}</p>
              <p className="text-sm text-text-muted">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Actividad Reciente */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-2xl shadow-card p-6">
              <h2 className="text-xl font-semibold text-text mb-6">Actividad Reciente</h2>
              <div className="space-y-6">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-xl bg-surface-light hover:bg-surface-light/80 transition-colors duration-300"
                  >
                    <div className="bg-surface p-3 rounded-lg mr-4">
                      {activity.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-text">{activity.type}</h3>
                      <p className="text-sm text-text-muted">{activity.location}</p>
                    </div>
                    <div className="text-sm text-text-light">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Acciones Rápidas */}
          <div className="bg-surface rounded-2xl shadow-card p-6">
            <h2 className="text-xl font-semibold text-text mb-6">Acciones Rápidas</h2>
            <div className="space-y-4">
              <button
                onClick={() => navigate('/reservas')}
                className="w-full p-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <FiCalendar className="w-5 h-5" />
                <span>Nueva Reserva</span>
              </button>
              <button
                onClick={() => navigate('/laboratorios')}
                className="w-full p-4 rounded-xl bg-surface-light hover:bg-surface-light/80 text-text font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <FiBeaker className="w-5 h-5" />
                <span>Ver Laboratorios</span>
              </button>
              <button
                onClick={() => navigate('/usuarios')}
                className="w-full p-4 rounded-xl bg-surface-light hover:bg-surface-light/80 text-text font-medium transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <FiUsers className="w-5 h-5" />
                <span>Gestionar Usuarios</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 
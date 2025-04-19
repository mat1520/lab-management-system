import React, { useState } from 'react';
import { FiCalendar, FiClock, FiUser, FiMapPin, FiCheck, FiX } from 'react-icons/fi';

interface Reservation {
  id: string;
  laboratory: string;
  date: string;
  startTime: string;
  endTime: string;
  user: string;
  status: 'pending' | 'approved' | 'rejected';
  purpose: string;
}

const Reservations: React.FC = () => {
  const [reservations] = useState<Reservation[]>([
    {
      id: 'RES001',
      laboratory: 'Laboratorio de Química',
      date: '2024-04-20',
      startTime: '14:30',
      endTime: '16:30',
      user: 'Carlos Martínez',
      status: 'approved',
      purpose: 'Práctica de Química Orgánica',
    },
    {
      id: 'RES002',
      laboratory: 'Laboratorio de Física',
      date: '2024-04-21',
      startTime: '10:00',
      endTime: '12:00',
      user: 'Ana García',
      status: 'pending',
      purpose: 'Experimento de Ondas',
    },
    {
      id: 'RES003',
      laboratory: 'Laboratorio de Biología',
      date: '2024-04-22',
      startTime: '09:00',
      endTime: '11:00',
      user: 'Luis Rodríguez',
      status: 'rejected',
      purpose: 'Análisis de Muestras',
    },
  ]);

  const getStatusColor = (status: Reservation['status']) => {
    switch (status) {
      case 'approved':
        return 'text-success bg-success/10';
      case 'pending':
        return 'text-warning bg-warning/10';
      case 'rejected':
        return 'text-error bg-error/10';
    }
  };

  const getStatusText = (status: Reservation['status']) => {
    switch (status) {
      case 'approved':
        return 'Aprobada';
      case 'pending':
        return 'Pendiente';
      case 'rejected':
        return 'Rechazada';
    }
  };

  const getStatusIcon = (status: Reservation['status']) => {
    switch (status) {
      case 'approved':
        return <FiCheck className="w-4 h-4" />;
      case 'pending':
        return <FiClock className="w-4 h-4" />;
      case 'rejected':
        return <FiX className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Reservas
            </h1>
            <p className="text-text-light mt-2">
              Gestión de reservas de laboratorios
            </p>
          </div>
          <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-medium transition-colors duration-300 flex items-center space-x-2">
            <FiCalendar className="w-5 h-5" />
            <span>Nueva Reserva</span>
          </button>
        </div>

        <div className="space-y-6">
          {reservations.map((reservation) => (
            <div
              key={reservation.id}
              className="bg-surface rounded-2xl shadow-card hover:shadow-hover transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-xl font-semibold text-text">
                        {reservation.laboratory}
                      </h2>
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(
                          reservation.status
                        )}`}
                      >
                        {getStatusIcon(reservation.status)}
                        <span>{getStatusText(reservation.status)}</span>
                      </span>
                    </div>
                    <p className="text-text-muted">{reservation.purpose}</p>
                  </div>
                  <p className="text-sm text-text-light">ID: {reservation.id}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-surface-light">
                      <FiCalendar className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Fecha</p>
                      <p className="text-text font-medium">{reservation.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-surface-light">
                      <FiClock className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Horario</p>
                      <p className="text-text font-medium">
                        {reservation.startTime} - {reservation.endTime}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-surface-light">
                      <FiUser className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Solicitante</p>
                      <p className="text-text font-medium">{reservation.user}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-surface-light">
                      <FiMapPin className="w-5 h-5 text-error" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Laboratorio</p>
                      <p className="text-text font-medium">{reservation.laboratory}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-surface-light p-4 flex justify-end space-x-3">
                <button className="px-4 py-2 rounded-lg bg-surface-light hover:bg-surface-light/80 text-text font-medium transition-colors duration-300">
                  Ver Detalles
                </button>
                {reservation.status === 'pending' && (
                  <>
                    <button className="px-4 py-2 rounded-lg bg-success hover:bg-success-dark text-white font-medium transition-colors duration-300">
                      Aprobar
                    </button>
                    <button className="px-4 py-2 rounded-lg bg-error hover:bg-error-dark text-white font-medium transition-colors duration-300">
                      Rechazar
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations; 
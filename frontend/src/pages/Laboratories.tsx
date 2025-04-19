import React, { useState } from 'react';
import { FiMonitor, FiClock, FiUsers, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';

interface Laboratory {
  id: string;
  name: string;
  status: 'available' | 'in-use' | 'maintenance';
  capacity: number;
  equipment: string[];
  nextReservation?: string;
  currentUsers?: number;
}

const Laboratories: React.FC = () => {
  const [laboratories] = useState<Laboratory[]>([
    {
      id: '101',
      name: 'Laboratorio de Química',
      status: 'available',
      capacity: 30,
      equipment: ['Microscopios', 'Balanzas Analíticas', 'Espectrofotómetro'],
      nextReservation: '14:30',
    },
    {
      id: '102',
      name: 'Laboratorio de Física',
      status: 'in-use',
      capacity: 25,
      equipment: ['Osciloscopios', 'Generadores de Señales', 'Multímetros'],
      currentUsers: 18,
    },
    {
      id: '103',
      name: 'Laboratorio de Biología',
      status: 'maintenance',
      capacity: 20,
      equipment: ['Microscopios', 'Centrífugas', 'Incubadoras'],
    },
  ]);

  const getStatusColor = (status: Laboratory['status']) => {
    switch (status) {
      case 'available':
        return 'text-success bg-success/10';
      case 'in-use':
        return 'text-primary bg-primary/10';
      case 'maintenance':
        return 'text-error bg-error/10';
    }
  };

  const getStatusText = (status: Laboratory['status']) => {
    switch (status) {
      case 'available':
        return 'Disponible';
      case 'in-use':
        return 'En Uso';
      case 'maintenance':
        return 'Mantenimiento';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Laboratorios
          </h1>
          <p className="text-text-light mt-2">
            Gestión y monitoreo de laboratorios
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {laboratories.map((lab) => (
            <div
              key={lab.id}
              className="bg-surface rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold text-text">{lab.name}</h2>
                    <p className="text-text-muted">Lab {lab.id}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      lab.status
                    )}`}
                  >
                    {getStatusText(lab.status)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-surface-light">
                      <FiUsers className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">Capacidad</p>
                      <p className="text-text font-medium">{lab.capacity} personas</p>
                    </div>
                  </div>

                  {lab.status === 'in-use' && (
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-surface-light">
                        <FiUsers className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">Ocupación</p>
                        <p className="text-text font-medium">{lab.currentUsers} personas</p>
                      </div>
                    </div>
                  )}

                  {lab.status === 'available' && lab.nextReservation && (
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-surface-light">
                        <FiClock className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-text-muted">Próxima reserva</p>
                        <p className="text-text font-medium">{lab.nextReservation}</p>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-sm font-medium text-text-light mb-2">Equipamiento</h3>
                  <div className="space-y-2">
                    {lab.equipment.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-text-muted"
                      >
                        <FiMonitor className="w-4 h-4" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-surface-light p-4">
                <div className="flex space-x-2">
                  <button className="flex-1 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                    Reservar
                  </button>
                  <button className="flex-1 bg-surface-light hover:bg-surface-light/80 text-text py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laboratories; 
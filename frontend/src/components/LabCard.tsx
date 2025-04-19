import React from 'react';
import { Link } from 'react-router-dom';
import { FiCpu, FiUsers, FiActivity, FiShield, FiAlertCircle } from 'react-icons/fi';

interface LabCardProps {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'maintenance' | 'offline';
  users: number;
  maxUsers: number;
  cpuUsage: number;
  memoryUsage: number;
  lastActivity: string;
  securityLevel: 'high' | 'medium' | 'low';
}

const LabCard: React.FC<LabCardProps> = ({
  id,
  name,
  description,
  status,
  users,
  maxUsers,
  cpuUsage,
  memoryUsage,
  lastActivity,
  securityLevel,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'active':
        return 'bg-success/20 text-success';
      case 'maintenance':
        return 'bg-warning/20 text-warning';
      case 'offline':
        return 'bg-error/20 text-error';
      default:
        return 'bg-text-tertiary/20 text-text-tertiary';
    }
  };

  const getSecurityLevelColor = () => {
    switch (securityLevel) {
      case 'high':
        return 'bg-success/20 text-success';
      case 'medium':
        return 'bg-warning/20 text-warning';
      case 'low':
        return 'bg-error/20 text-error';
      default:
        return 'bg-text-tertiary/20 text-text-tertiary';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'active':
        return 'Activo';
      case 'maintenance':
        return 'En Mantenimiento';
      case 'offline':
        return 'Desconectado';
      default:
        return 'Desconocido';
    }
  };

  const getSecurityLevelText = () => {
    switch (securityLevel) {
      case 'high':
        return 'Alto';
      case 'medium':
        return 'Medio';
      case 'low':
        return 'Bajo';
      default:
        return 'Desconocido';
    }
  };

  return (
    <div className="card p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-text-primary mb-1">{name}</h3>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {getStatusText()}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
            <FiUsers size={18} />
          </div>
          <div>
            <p className="text-text-secondary text-xs">Usuarios</p>
            <p className="text-text-primary font-medium">{users}/{maxUsers}</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
            <FiCpu size={18} />
          </div>
          <div>
            <p className="text-text-secondary text-xs">CPU</p>
            <p className="text-text-primary font-medium">{cpuUsage}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
            <FiActivity size={18} />
          </div>
          <div>
            <p className="text-text-secondary text-xs">Memoria</p>
            <p className="text-text-primary font-medium">{memoryUsage}%</p>
          </div>
        </div>
        <div className="flex items-center">
          <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
            <FiShield size={18} />
          </div>
          <div>
            <p className="text-text-secondary text-xs">Seguridad</p>
            <div className={`px-2 py-0.5 rounded-full text-xs font-medium inline-block ${getSecurityLevelColor()}`}>
              {getSecurityLevelText()}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-surface-light">
        <div className="flex items-center text-text-tertiary text-sm">
          <FiActivity className="mr-1" size={14} />
          <span>Última actividad: {lastActivity}</span>
        </div>
        <Link 
          to={`/labs/${id}`} 
          className="btn-secondary py-2 px-4 text-sm"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );
};

export default LabCard; 
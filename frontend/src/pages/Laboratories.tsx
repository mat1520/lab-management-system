import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCpu, FiShield, FiUsers, FiClock, FiActivity } from 'react-icons/fi';

interface Laboratory {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'maintenance' | 'offline';
  users: number;
  maxUsers: number;
  cpuUsage: number;
  memoryUsage: number;
  lastActivity: string;
  securityLevel: 'low' | 'medium' | 'high';
}

const laboratories: Laboratory[] = [
  {
    id: 'lab-1',
    name: 'Laboratorio de Redes',
    description: 'Entorno para pruebas de configuración de redes y seguridad.',
    status: 'active',
    users: 5,
    maxUsers: 10,
    cpuUsage: 45,
    memoryUsage: 60,
    lastActivity: '2024-02-20T10:30:00',
    securityLevel: 'high'
  },
  {
    id: 'lab-2',
    name: 'Laboratorio de Ciberseguridad',
    description: 'Espacio para pruebas de penetración y análisis de vulnerabilidades.',
    status: 'active',
    users: 3,
    maxUsers: 8,
    cpuUsage: 75,
    memoryUsage: 80,
    lastActivity: '2024-02-20T11:15:00',
    securityLevel: 'high'
  },
  {
    id: 'lab-3',
    name: 'Laboratorio de Desarrollo',
    description: 'Entorno para desarrollo y pruebas de aplicaciones.',
    status: 'maintenance',
    users: 0,
    maxUsers: 15,
    cpuUsage: 0,
    memoryUsage: 0,
    lastActivity: '2024-02-19T18:00:00',
    securityLevel: 'medium'
  }
];

const Laboratories = () => {
  const getStatusColor = (status: Laboratory['status']) => {
    switch (status) {
      case 'active':
        return 'text-success';
      case 'maintenance':
        return 'text-warning';
      case 'offline':
        return 'text-error';
      default:
        return 'text-text-secondary';
    }
  };

  const getSecurityLevelColor = (level: Laboratory['securityLevel']) => {
    switch (level) {
      case 'high':
        return 'text-error';
      case 'medium':
        return 'text-warning';
      case 'low':
        return 'text-success';
      default:
        return 'text-text-secondary';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-grid-pattern py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Laboratorios Virtuales</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Accede a nuestros laboratorios especializados para realizar pruebas y experimentos en un entorno seguro y controlado.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {laboratories.map((lab) => (
            <motion.div
              key={lab.id}
              variants={itemVariants}
              className="cyber-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-orbitron gradient-text">
                  {lab.name}
                </h3>
                <span className={`text-sm font-medium ${getStatusColor(lab.status)}`}>
                  {lab.status.toUpperCase()}
                </span>
              </div>

              <p className="text-text-secondary mb-6">
                {lab.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiUsers className="text-primary" />
                    <span className="text-text-secondary">Usuarios</span>
                  </div>
                  <span className="text-text-primary">
                    {lab.users}/{lab.maxUsers}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiCpu className="text-primary" />
                    <span className="text-text-secondary">CPU</span>
                  </div>
                  <div className="w-32 bg-background-light/50 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${lab.cpuUsage}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiActivity className="text-primary" />
                    <span className="text-text-secondary">Memoria</span>
                  </div>
                  <div className="w-32 bg-background-light/50 rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${lab.memoryUsage}%` }}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiShield className="text-primary" />
                    <span className="text-text-secondary">Seguridad</span>
                  </div>
                  <span className={`text-sm font-medium ${getSecurityLevelColor(lab.securityLevel)}`}>
                    {lab.securityLevel.toUpperCase()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiClock className="text-primary" />
                    <span className="text-text-secondary">Última actividad</span>
                  </div>
                  <span className="text-text-secondary text-sm">
                    {new Date(lab.lastActivity).toLocaleTimeString()}
                  </span>
                </div>
              </div>

              <Link
                to={`/laboratories/${lab.id}`}
                className="cyber-button-accent w-full text-center block"
              >
                Acceder al Laboratorio
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Laboratories; 
import React from 'react';
import { motion } from 'framer-motion';
import { FiShield, FiLock, FiServer, FiCode, FiCpu, FiDatabase, FiUsers, FiBarChart2 } from 'react-icons/fi';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FiShield className="w-8 h-8 text-primary" />,
      title: 'Seguridad Avanzada',
      description: 'Protección de nivel empresarial con monitoreo en tiempo real y detección de amenazas.'
    },
    {
      icon: <FiServer className="w-8 h-8 text-primary" />,
      title: 'Infraestructura Escalable',
      description: 'Arquitectura cloud-native que crece con tus necesidades y se adapta a tu carga de trabajo.'
    },
    {
      icon: <FiCode className="w-8 h-8 text-primary" />,
      title: 'API Robusta',
      description: 'Integración perfecta con tus herramientas existentes a través de una API RESTful documentada.'
    },
    {
      icon: <FiCpu className="w-8 h-8 text-primary" />,
      title: 'Monitoreo de Recursos',
      description: 'Seguimiento en tiempo real del uso de CPU, memoria y almacenamiento en todos tus laboratorios.'
    },
    {
      icon: <FiDatabase className="w-8 h-8 text-primary" />,
      title: 'Respaldo Automático',
      description: 'Copias de seguridad programadas y recuperación rápida en caso de fallos del sistema.'
    },
    {
      icon: <FiUsers className="w-8 h-8 text-primary" />,
      title: 'Gestión de Usuarios',
      description: 'Control de acceso granular con roles y permisos personalizables para cada miembro del equipo.'
    },
    {
      icon: <FiBarChart2 className="w-8 h-8 text-primary" />,
      title: 'Análisis Detallado',
      description: 'Informes y estadísticas detalladas sobre el uso y rendimiento de tus laboratorios.'
    },
    {
      icon: <FiLock className="w-8 h-8 text-primary" />,
      title: 'Cumplimiento Normativo',
      description: 'Configuraciones preestablecidas para cumplir con estándares de seguridad y normativas.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Características Principales
          </h1>
          <p className="text-text-secondary text-lg">
            Nuestra plataforma ofrece herramientas avanzadas para gestionar y proteger tus laboratorios de ciberseguridad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card hover:shadow-glow"
            >
              <div className="flex flex-col items-center text-center p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-text-secondary">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 
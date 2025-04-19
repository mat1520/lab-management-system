import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiLock, FiServer, FiCode } from 'react-icons/fi';

const Home: React.FC = () => {
  const features = [
    {
      icon: <FiLock className="w-8 h-8 text-primary" />,
      title: 'Seguridad Avanzada',
      description: 'Protección de nivel empresarial con monitoreo en tiempo real.'
    },
    {
      icon: <FiServer className="w-8 h-8 text-primary" />,
      title: 'Infraestructura Escalable',
      description: 'Arquitectura cloud-native que crece con tus necesidades.'
    },
    {
      icon: <FiCode className="w-8 h-8 text-primary" />,
      title: 'API Robusta',
      description: 'Integración perfecta con tus herramientas existentes.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-text-primary">
            Sistema de Gestión de Laboratorios
          </h1>
          <p className="text-text-secondary text-lg md:text-xl mb-8">
            Gestiona, monitorea y asegura tus laboratorios de ciberseguridad con nuestra 
            plataforma de última generación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all duration-300"
            >
              Comenzar Ahora
            </Link>
            <Link 
              to="/features" 
              className="px-8 py-3 bg-surface text-text-primary rounded-lg font-medium hover:bg-surface-light transition-all duration-300"
            >
              Ver Demo
            </Link>
          </div>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="card p-6 text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-display text-xl font-bold mb-2 text-text-primary">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home; 
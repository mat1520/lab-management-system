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
      icon: <FiServer className="w-8 h-8 text-secondary" />,
      title: 'Infraestructura Escalable',
      description: 'Arquitectura cloud-native que crece con tus necesidades.'
    },
    {
      icon: <FiCode className="w-8 h-8 text-accent" />,
      title: 'API Robusta',
      description: 'Integración perfecta con tus herramientas existentes.'
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>

      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <FiShield className="w-8 h-8 text-primary animate-glow" />
              <span className="font-display text-xl font-bold gradient-text">
                LabSec
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="nav-link">Características</Link>
              <Link to="/pricing" className="nav-link">Precios</Link>
              <Link to="/about" className="nav-link">Nosotros</Link>
              <Link to="/auth/login" className="cyber-button">
                Iniciar Sesión
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text animate-glow">
              Sistema de Gestión de Laboratorios
            </h1>
            <p className="text-text-secondary text-lg md:text-xl mb-8">
              Gestiona, monitorea y asegura tus laboratorios de ciberseguridad con nuestra 
              plataforma de última generación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="cyber-button">
                Comenzar Ahora
              </Link>
              <Link to="/features" className="cyber-button-secondary">
                Ver Demo
              </Link>
            </div>
          </motion.div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="cyber-card"
              >
                <div className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 animate-glow">{feature.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-2 gradient-text">
                    {feature.title}
                  </h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home; 
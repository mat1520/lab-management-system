import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiLock, FiUsers, FiActivity, FiCode, FiServer } from 'react-icons/fi';

const Home: React.FC = () => {
  return (
    <div className="page-container flex flex-col min-h-screen">
      {/* Elementos de acento con más brillo y animación */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] accent-circle animate-pulse-glow" style={{ opacity: 0.15 }}></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] accent-circle animate-pulse-glow" style={{ opacity: 0.15 }}></div>
      <div className="fixed inset-0 accent-grid"></div>
      
      {/* Hero Section Mejorado - Ahora centrado verticalmente */}
      <section className="flex-1 relative z-10 flex flex-col items-center justify-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-6xl mx-auto"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-primary to-purple-500 text-transparent bg-clip-text animate-gradient">
            LabSec
          </h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-text-primary leading-tight"
          >
            Sistema de Gestión de Laboratorios de Ciberseguridad
          </motion.h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl text-xl md:text-2xl text-text-secondary leading-relaxed text-center mb-12"
        >
          Plataforma integral para la gestión, monitoreo y seguridad de laboratorios especializados en ciberseguridad.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link 
            to="/auth/login" 
            className="btn-cyber-primary text-lg px-12 py-5 min-w-[200px] text-center"
          >
            Iniciar Sesión
          </Link>
          <Link 
            to="/auth/register" 
            className="btn-cyber-secondary text-lg px-12 py-5 min-w-[200px] text-center"
          >
            Registrarse
          </Link>
        </motion.div>
      </section>
      
      {/* Features Section con animaciones mejoradas */}
      <section className="relative z-10 py-20 px-4 md:px-8 bg-surface/30 backdrop-blur-lg mt-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 via-primary to-purple-500 text-transparent bg-clip-text"
          >
            Características Principales
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card glass-card p-8 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl bg-primary/20 text-primary mr-4 animate-pulse-slow">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-primary text-transparent bg-clip-text">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-text-secondary text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: <FiShield size={32} />,
    title: "Seguridad Avanzada",
    description: "Protección de nivel empresarial para tus laboratorios con monitoreo en tiempo real y detección de amenazas."
  },
  {
    icon: <FiLock size={32} />,
    title: "Control de Acceso",
    description: "Gestión granular de permisos y autenticación multifactor para garantizar que solo usuarios autorizados accedan a recursos críticos."
  },
  {
    icon: <FiUsers size={32} />,
    title: "Gestión de Usuarios",
    description: "Administración eficiente de usuarios, roles y equipos con integración de directorios activos y sistemas de identidad."
  },
  {
    icon: <FiActivity size={32} />,
    title: "Monitoreo en Tiempo Real",
    description: "Panel de control intuitivo con métricas clave y alertas personalizables para mantener la seguridad de tus laboratorios."
  },
  {
    icon: <FiCode size={32} />,
    title: "Entornos Aislados",
    description: "Creación y gestión de entornos de prueba aislados para experimentos de ciberseguridad sin riesgo para sistemas de producción."
  },
  {
    icon: <FiServer size={32} />,
    title: "Infraestructura Escalable",
    description: "Arquitectura basada en la nube que se adapta a tus necesidades, desde laboratorios pequeños hasta grandes instalaciones."
  }
];

export default Home; 
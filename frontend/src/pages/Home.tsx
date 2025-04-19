import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiLock, FiUsers, FiActivity, FiCode, FiServer } from 'react-icons/fi';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      {/* Elementos de acento con más brillo y animación */}
      <div className="accent-circle animate-pulse-glow" style={{ top: '-5%', left: '-5%', width: '500px', height: '500px', opacity: 0.15 }}></div>
      <div className="accent-circle animate-pulse-glow" style={{ bottom: '-5%', right: '-5%', width: '500px', height: '500px', opacity: 0.15 }}></div>
      <div className="accent-grid"></div>
      
      {/* Hero Section Mejorado */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 md:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-primary to-purple-500 text-transparent bg-clip-text animate-gradient">
            LabSec
          </h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary"
          >
            Sistema de Gestión de Laboratorios de Ciberseguridad
          </motion.h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl mb-12 text-xl md:text-2xl text-text-secondary leading-relaxed"
        >
          Plataforma integral para la gestión, monitoreo y seguridad de laboratorios especializados en ciberseguridad.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Link to="/auth/login" className="btn-primary-glow text-lg px-8 py-4">
            Iniciar Sesión
          </Link>
          <Link to="/auth/register" className="btn-secondary-glow text-lg px-8 py-4">
            Registrarse
          </Link>
        </motion.div>
      </section>
      
      {/* Features Section con animaciones mejoradas */}
      <section className="relative z-10 py-20 px-4 md:px-8">
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
      
      {/* CTA Section */}
      <section className="relative z-10 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            ¿Listo para mejorar la seguridad de tu laboratorio?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8 text-lg"
          >
            Únete a nuestra plataforma y comienza a gestionar tus laboratorios de ciberseguridad de manera eficiente y segura.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/auth/register" className="btn-primary">
              Comenzar Ahora
            </Link>
          </motion.div>
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
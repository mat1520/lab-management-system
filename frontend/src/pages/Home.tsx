import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiLock, FiUsers, FiActivity, FiCode, FiServer } from 'react-icons/fi';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      {/* Elementos de acento */}
      <div className="accent-circle" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="accent-circle" style={{ bottom: '-10%', right: '-10%' }}></div>
      <div className="accent-grid"></div>
      
      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center px-4 md:px-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          Sistema de Gestión de Laboratorios de Ciberseguridad
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mb-8 text-lg md:text-xl"
        >
          Plataforma integral para la gestión, monitoreo y seguridad de laboratorios especializados en ciberseguridad.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/auth/login" className="btn-primary">
            Iniciar Sesión
          </Link>
          <Link to="/auth/register" className="btn-secondary">
            Registrarse
          </Link>
        </motion.div>
      </section>
      
      {/* Features Section */}
      <section className="relative z-10 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
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
                className="card p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-text-secondary">{feature.description}</p>
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
    icon: <FiShield size={24} />,
    title: "Seguridad Avanzada",
    description: "Protección de nivel empresarial para tus laboratorios con monitoreo en tiempo real y detección de amenazas."
  },
  {
    icon: <FiLock size={24} />,
    title: "Control de Acceso",
    description: "Gestión granular de permisos y autenticación multifactor para garantizar que solo usuarios autorizados accedan a recursos críticos."
  },
  {
    icon: <FiUsers size={24} />,
    title: "Gestión de Usuarios",
    description: "Administración eficiente de usuarios, roles y equipos con integración de directorios activos y sistemas de identidad."
  },
  {
    icon: <FiActivity size={24} />,
    title: "Monitoreo en Tiempo Real",
    description: "Panel de control intuitivo con métricas clave y alertas personalizables para mantener la seguridad de tus laboratorios."
  },
  {
    icon: <FiCode size={24} />,
    title: "Entornos Aislados",
    description: "Creación y gestión de entornos de prueba aislados para experimentos de ciberseguridad sin riesgo para sistemas de producción."
  },
  {
    icon: <FiServer size={24} />,
    title: "Infraestructura Escalable",
    description: "Arquitectura basada en la nube que se adapta a tus necesidades, desde laboratorios pequeños hasta grandes instalaciones."
  }
];

export default Home; 
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiLock, FiUsers, FiActivity, FiCode, FiServer } from 'react-icons/fi';
import { Particles } from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";

const Home: React.FC = () => {
  const particlesInit = async (engine: Engine) => {
    await import("@tsparticles/slim").then((module) => {
      module.loadSlim(engine);
    });
  };

  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = '1';
      titleRef.current.style.transform = 'translateY(0)';
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#ff003c",
            },
            links: {
              color: "#ff003c",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-10 -z-10"></div>

      {/* Glowing Circles */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow delay-1000"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col">
        {/* Hero Section */}
        <main className="flex-1 flex flex-col items-center justify-center text-center py-16">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <h1 className="text-8xl md:text-9xl font-bold font-display tracking-tight cyber-glitch-effect">
                LabSec
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 animate-gradient-x"></div>
            </div>
          </motion.div>

          {/* Title and Description */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-4xl mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary text-transparent bg-clip-text">
              Sistema de Gestión de Laboratorios de Ciberseguridad
            </h2>
            <p className="text-xl md:text-2xl text-text-secondary">
              Plataforma integral para la gestión, monitoreo y seguridad de laboratorios especializados en ciberseguridad.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              to="/auth/login"
              className="cyber-button-primary group relative"
            >
              <span className="relative z-10">Iniciar Sesión</span>
              <div className="absolute inset-0 transform group-hover:translate-x-1 group-hover:translate-y-1 bg-primary-dark transition-transform"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light"></div>
            </Link>
            <Link
              to="/auth/register"
              className="cyber-button-secondary group relative"
            >
              <span className="relative z-10">Registrarse</span>
              <div className="absolute inset-0 transform group-hover:translate-x-1 group-hover:translate-y-1 bg-secondary/50 transition-transform"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 border border-primary/50"></div>
            </Link>
          </motion.div>
        </main>
      </div>
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
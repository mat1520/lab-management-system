import React from 'react';
import { motion } from 'framer-motion';
import { FiBook, FiCode, FiFileText, FiTerminal, FiGitBranch, FiCpu } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const sections = [
    {
      title: 'Guía de Inicio Rápido',
      icon: FiBook,
      description: 'Aprende los conceptos básicos y comienza a usar LabSec en minutos.',
      link: '/docs/quickstart',
      color: 'primary'
    },
    {
      title: 'Documentación de API',
      icon: FiCode,
      description: 'Referencia completa de la API REST y WebSocket.',
      link: '/docs/api',
      color: 'secondary'
    },
    {
      title: 'Ejemplos y Tutoriales',
      icon: FiFileText,
      description: 'Casos de uso prácticos y ejemplos detallados.',
      link: '/docs/examples',
      color: 'accent'
    },
    {
      title: 'Línea de Comandos',
      icon: FiTerminal,
      description: 'Guía de uso de la CLI de LabSec.',
      link: '/docs/cli',
      color: 'primary'
    },
    {
      title: 'Control de Versiones',
      icon: FiGitBranch,
      description: 'Integración con sistemas de control de versiones.',
      link: '/docs/versioning',
      color: 'secondary'
    },
    {
      title: 'Recursos del Sistema',
      icon: FiCpu,
      description: 'Gestión y monitorización de recursos.',
      link: '/docs/resources',
      color: 'accent'
    }
  ];

  return (
    <div className="min-h-screen bg-grid-pattern">
      <div className="container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">
            Documentación
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Todo lo que necesitas saber para sacar el máximo provecho de LabSec.
            Desde guías básicas hasta documentación técnica avanzada.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={section.link}
                className="cyber-card block p-6 h-full hover:scale-105 transition-transform"
              >
                <div className={`text-${section.color} text-3xl mb-4`}>
                  <section.icon />
                </div>
                <h3 className="text-xl font-bold mb-2 font-orbitron gradient-text">
                  {section.title}
                </h3>
                <p className="text-text-secondary">
                  {section.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="gradient-border inline-block">
            <Link
              to="/docs/quickstart"
              className="cyber-button-accent block"
            >
              Comenzar Ahora
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Documentation; 
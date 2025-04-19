import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiUsers, FiAward, FiGlobe, FiHeart } from 'react-icons/fi';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Ana Martínez',
      role: 'CEO & Fundadora',
      bio: 'Experta en ciberseguridad con más de 15 años de experiencia en el sector.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      name: 'Carlos Rodríguez',
      role: 'CTO',
      bio: 'Desarrollador full-stack especializado en arquitecturas cloud y seguridad.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      name: 'Laura Sánchez',
      role: 'Directora de Producto',
      bio: 'Product manager con experiencia en soluciones de seguridad empresarial.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'Miguel Torres',
      role: 'Líder de Desarrollo',
      bio: 'Ingeniero de software con enfoque en aplicaciones seguras y escalables.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  const values = [
    {
      icon: <FiUsers className="w-8 h-8 text-primary" />,
      title: 'Colaboración',
      description: 'Creemos en el poder del trabajo en equipo y la colaboración para resolver los desafíos más complejos.'
    },
    {
      icon: <FiAward className="w-8 h-8 text-primary" />,
      title: 'Excelencia',
      description: 'Nos esforzamos por la excelencia en todo lo que hacemos, desde el código hasta la atención al cliente.'
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-primary" />,
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de mejorar y adaptarnos a las necesidades cambiantes del mercado.'
    },
    {
      icon: <FiHeart className="w-8 h-8 text-primary" />,
      title: 'Compromiso',
      description: 'Estamos comprometidos con la seguridad y el éxito de nuestros clientes y sus laboratorios.'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Sección de Introducción */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Sobre Nosotros
          </h1>
          <p className="text-text-secondary text-lg mb-8">
            Somos un equipo apasionado de profesionales de la ciberseguridad y desarrollo de software, 
            dedicados a crear soluciones innovadoras para la gestión de laboratorios de seguridad.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-all duration-300"
          >
            Contáctanos
          </Link>
        </motion.div>

        {/* Sección de Misión y Visión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <div className="p-6">
              <h2 className="font-display text-2xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-text-secondary">
                Proporcionar herramientas avanzadas y accesibles para que organizaciones de todos los tamaños 
                puedan gestionar y proteger sus laboratorios de ciberseguridad de manera eficiente y segura.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <div className="p-6">
              <h2 className="font-display text-2xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-text-secondary">
                Ser la plataforma líder en gestión de laboratorios de ciberseguridad, reconocida por nuestra 
                innovación, seguridad y facilidad de uso en todo el mundo.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sección de Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="font-display text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="card text-center"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-text-secondary">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sección de Equipo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="font-display text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="card text-center"
              >
                <div className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-primary"
                  />
                  <h3 className="font-display text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-2">{member.role}</p>
                  <p className="text-text-secondary">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 
import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import styles from './Contact.module.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'soporte@virtualabs.tech'
    },
    {
      icon: <FiPhone />,
      title: 'Teléfono',
      content: '+34 900 123 456'
    },
    {
      icon: <FiMapPin />,
      title: 'Ubicación',
      content: 'Madrid, España'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className={styles.contactContainer}>
      <motion.div 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">Contacto</h1>
        <p className="text-text-secondary max-w-2xl mx-auto">
          ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para asistirte.
          Contáctanos a través de cualquiera de estos medios o utiliza el formulario.
        </p>
      </motion.div>

      <motion.div 
        className={styles.infoGrid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {contactInfo.map((info, index) => (
          <motion.div 
            key={index}
            className={styles.infoCard}
            variants={itemVariants}
          >
            <div className={styles.infoIcon}>{info.icon}</div>
            <h3 className={styles.infoTitle}>{info.title}</h3>
            <p className={styles.infoContent}>{info.content}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className={styles.formContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formGrid}>
            <div>
              <label htmlFor="name" className="block mb-2">Nombre</label>
              <input
                type="text"
                id="name"
                className="cyber-input w-full"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="cyber-input w-full"
                placeholder="tu@email.com"
              />
            </div>
            <div className={styles.fullWidth}>
              <label htmlFor="subject" className="block mb-2">Asunto</label>
              <input
                type="text"
                id="subject"
                className="cyber-input w-full"
                placeholder="¿Sobre qué nos quieres contactar?"
              />
            </div>
            <div className={styles.fullWidth}>
              <label htmlFor="message" className="block mb-2">Mensaje</label>
              <textarea
                id="message"
                rows={6}
                className="cyber-input w-full"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>
          </div>
          <div className={styles.submitButton}>
            <button type="submit" className="cyber-button-accent">
              Enviar mensaje
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact; 
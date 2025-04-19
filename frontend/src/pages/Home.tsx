import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiShield, FiLock, FiServer, FiCode, FiMenu, FiX } from 'react-icons/fi';

const Home: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const fullText = 'Sistema de Gestión de Laboratorios';

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };

    typeText();
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F2C] text-white overflow-hidden">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-[#121830]/80 backdrop-blur-lg border-b border-[#1E90FF]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <FiShield className="w-8 h-8 text-[#1E90FF]" />
              <span className="font-orbitron text-xl font-bold bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] bg-clip-text text-transparent">
                LabSec
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="nav-link">Características</Link>
              <Link to="/pricing" className="nav-link">Precios</Link>
              <Link to="/about" className="nav-link">Nosotros</Link>
              <Link to="/auth/login" className="px-4 py-2 rounded-lg bg-[#1E90FF] hover:bg-[#1E90FF]/80 transition-all duration-300 font-medium">
                Iniciar Sesión
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#121830] border-b border-[#1E90FF]/20"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/features" className="nav-link">Características</Link>
                <Link to="/pricing" className="nav-link">Precios</Link>
                <Link to="/about" className="nav-link">Nosotros</Link>
                <Link to="/auth/login" className="px-4 py-2 rounded-lg bg-[#1E90FF] hover:bg-[#1E90FF]/80 transition-all duration-300 font-medium text-center">
                  Iniciar Sesión
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <main className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#1E90FF]/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#00FFFF]/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Main Title */}
            <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 cyber-glitch">
              <span className="bg-gradient-to-r from-[#1E90FF] via-[#00FFFF] to-[#1E90FF] bg-clip-text text-transparent">
                {typedText}
              </span>
              <span className="animate-blink">_</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[#AAB4CF] text-lg md:text-xl mb-8 leading-relaxed">
              Gestiona, monitorea y asegura tus laboratorios de ciberseguridad con nuestra 
              plataforma de última generación potenciada por IA.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button-primary"
              >
                <span className="relative z-10">Comenzar Ahora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E90FF] to-[#00FFFF] rounded-lg"></div>
                <div className="absolute inset-[2px] bg-[#121830] rounded-lg"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cyber-button-secondary"
              >
                <span className="relative z-10">Ver Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E90FF]/20 to-[#00FFFF]/20 rounded-lg"></div>
                <div className="absolute inset-[2px] bg-[#121830] rounded-lg"></div>
              </motion.button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="feature-card"
              >
                <FiLock className="w-8 h-8 text-[#1E90FF] mb-4" />
                <h3 className="font-orbitron text-xl font-bold mb-2">Seguridad Avanzada</h3>
                <p className="text-[#AAB4CF]">Protección de nivel empresarial con monitoreo en tiempo real.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="feature-card"
              >
                <FiServer className="w-8 h-8 text-[#00FFFF] mb-4" />
                <h3 className="font-orbitron text-xl font-bold mb-2">Infraestructura Escalable</h3>
                <p className="text-[#AAB4CF]">Arquitectura cloud-native que crece con tus necesidades.</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="feature-card"
              >
                <FiCode className="w-8 h-8 text-[#00FF99] mb-4" />
                <h3 className="font-orbitron text-xl font-bold mb-2">API Robusta</h3>
                <p className="text-[#AAB4CF]">Integración perfecta con tus herramientas existentes.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Home; 
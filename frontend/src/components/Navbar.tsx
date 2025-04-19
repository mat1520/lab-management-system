import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiHome, FiShield, FiUsers, FiSettings, FiLogOut } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-display font-bold bg-gradient-cyber bg-clip-text text-transparent">
                LabSec
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'active' : ''}`}
              >
                <FiHome className="inline-block mr-2" />
                Inicio
              </Link>
              <Link 
                to="/dashboard" 
                className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}
              >
                <FiShield className="inline-block mr-2" />
                Dashboard
              </Link>
              <Link 
                to="/users" 
                className={`nav-link ${isActive('/users') ? 'active' : ''}`}
              >
                <FiUsers className="inline-block mr-2" />
                Usuarios
              </Link>
              <Link 
                to="/settings" 
                className={`nav-link ${isActive('/settings') ? 'active' : ''}`}
              >
                <FiSettings className="inline-block mr-2" />
                Configuración
              </Link>
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center">
            <div className="relative ml-3">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="text-sm font-medium">JD</span>
                </div>
                <button className="ml-2 text-text-secondary hover:text-text-primary transition-colors">
                  <FiLogOut size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface-light focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isOpen ? (
                <FiX className="block h-6 w-6" />
              ) : (
                <FiMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface/95 backdrop-blur-md shadow-lg">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/') 
                ? 'text-primary bg-primary/10' 
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-light'
            }`}
            onClick={closeMenu}
          >
            <FiHome className="inline-block mr-2" />
            Inicio
          </Link>
          <Link
            to="/dashboard"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/dashboard') 
                ? 'text-primary bg-primary/10' 
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-light'
            }`}
            onClick={closeMenu}
          >
            <FiShield className="inline-block mr-2" />
            Dashboard
          </Link>
          <Link
            to="/users"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/users') 
                ? 'text-primary bg-primary/10' 
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-light'
            }`}
            onClick={closeMenu}
          >
            <FiUsers className="inline-block mr-2" />
            Usuarios
          </Link>
          <Link
            to="/settings"
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isActive('/settings') 
                ? 'text-primary bg-primary/10' 
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-light'
            }`}
            onClick={closeMenu}
          >
            <FiSettings className="inline-block mr-2" />
            Configuración
          </Link>
          <div className="pt-4 pb-3 border-t border-surface-light">
            <div className="flex items-center px-3">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <span className="text-sm font-medium">JD</span>
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-text-primary">John Doe</div>
                <div className="text-sm font-medium text-text-secondary">john@example.com</div>
              </div>
            </div>
            <div className="mt-3 px-3">
              <button className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-text-primary hover:bg-surface-light">
                <FiLogOut className="mr-2" />
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
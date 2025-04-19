import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  return (
    <footer className="glass-effect mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información de la empresa */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lab Management System
            </h3>
            <p className="text-text-secondary">
              Optimizando la gestión de laboratorios para instituciones educativas
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Información de contacto y redes sociales */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">Contacto</h4>
            <div className="space-y-2">
              <p className="text-text-secondary">
                Email: soporte@labmanagement.com
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  <FiGithub size={20} />
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-text-secondary hover:text-primary transition-colors">
                  <FiTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-secondary text-sm">
              © 2024 Lab Management System. Todos los derechos reservados.
            </p>
            {isAuthenticated && (
              <p className="text-text-secondary text-sm mt-2 md:mt-0">
                Conectado como: {user?.name}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Footer: React.FC = () => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  return (
    <footer className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-600">
            © 2024 Lab Management System. Todos los derechos reservados.
          </p>
          {isAuthenticated && (
            <p className="text-sm text-gray-600 mt-2 md:mt-0">
              Conectado como: {user?.name}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
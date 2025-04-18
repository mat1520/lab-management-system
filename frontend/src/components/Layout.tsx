import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-surface">
      <header className="glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-white">
              Lab Management
            </Link>
            
            <nav className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="button-gradient"
                  >
                    Cerrar Sesión
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className={`nav-link ${location.pathname === '/login' ? 'active' : ''}`}
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="button-gradient"
                  >
                    Crear Cuenta
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto">
        {children}
      </main>

      <footer className="glass-effect border-t border-white/10 mt-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              © 2024 Lab Management System. Todos los derechos reservados.
            </p>
            {isAuthenticated && (
              <p className="text-sm text-gray-400 mt-2 md:mt-0">
                Conectado como: {user?.name}
              </p>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 
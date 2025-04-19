import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { logout } from '../store/slices/authSlice';
import { FiMenu, FiX, FiUser, FiLogOut } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="glass-effect sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Lab Management
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className={`nav-link ${
                    location.pathname === '/dashboard' ? 'text-primary' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-4">
                  <span className="text-text-secondary">
                    <FiUser className="inline-block mr-2" />
                    {user?.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="button-gradient"
                  >
                    <FiLogOut className="inline-block" />
                    Cerrar Sesión
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`nav-link ${
                    location.pathname === '/login' ? 'text-primary' : ''
                  }`}
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-700">
            {isAuthenticated ? (
              <div className="flex flex-col space-y-4">
                <Link
                  to="/dashboard"
                  className={`nav-link ${
                    location.pathname === '/dashboard' ? 'text-primary' : ''
                  }`}
                >
                  Dashboard
                </Link>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <FiUser />
                  <span>{user?.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="button-gradient w-full"
                >
                  <FiLogOut className="inline-block mr-2" />
                  Cerrar Sesión
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-4">
                <Link
                  to="/login"
                  className={`nav-link ${
                    location.pathname === '/login' ? 'text-primary' : ''
                  }`}
                >
                  Iniciar Sesión
                </Link>
                <Link
                  to="/register"
                  className="button-gradient w-full text-center"
                >
                  Crear Cuenta
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 
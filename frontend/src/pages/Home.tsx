import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Home: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-50 dark:from-gray-900 dark:to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Decorative circles */}
        <div className="accent-circle top-[-10%] left-[-5%]"></div>
        <div className="accent-circle bottom-[-10%] right-[-5%]"></div>

        {/* Navigation */}
        <nav className="relative z-10 backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gradient">Lab Management</h1>
              </div>
              <div className="flex space-x-4">
                {!user ? (
                  <>
                    <Link to="/login" className="button-gradient px-6 py-2">
                      Iniciar Sesión
                    </Link>
                    <Link to="/register" className="button-gradient px-6 py-2">
                      Registrarse
                    </Link>
                  </>
                ) : (
                  <Link to="/dashboard" className="button-gradient px-6 py-2">
                    Dashboard
                  </Link>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gradient">
              Sistema Inteligente de Gestión de Laboratorios
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
              Revoluciona la gestión de tu laboratorio con nuestra plataforma impulsada por IA.
              Optimiza recursos, mejora la eficiencia y toma decisiones basadas en datos en tiempo real.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/register" className="button-gradient px-8 py-4 text-lg">
                Comenzar Ahora
              </Link>
              <a href="#features" className="px-8 py-4 text-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                Saber Más
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient mb-4">
              Características Destacadas
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Descubre cómo podemos transformar tu laboratorio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4 text-gradient">IA Avanzada</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Predicción de mantenimiento y optimización automática de recursos mediante IA.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4 text-gradient">Tiempo Real</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitoreo en vivo con alertas instantáneas y dashboards actualizados.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4 text-gradient">Analytics</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Informes detallados y análisis profundo del uso de recursos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative bg-gradient-to-b from-transparent to-indigo-50/50 dark:to-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">99%</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfacción</div>
            </div>
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-gray-600 dark:text-gray-300">Soporte</div>
            </div>
            <div className="glass-effect p-8 rounded-2xl">
              <div className="text-4xl font-bold text-gradient mb-2">+1000</div>
              <div className="text-gray-600 dark:text-gray-300">Usuarios</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect p-12 rounded-2xl">
            <h2 className="text-4xl font-bold text-gradient mb-8">
              ¿Listo para revolucionar tu laboratorio?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a los más de 1000 usuarios que ya han transformado la gestión de sus laboratorios.
            </p>
            <Link to="/register" className="button-gradient px-8 py-4 text-lg inline-block">
              Comenzar Gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>© 2024 Lab Management System. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home; 
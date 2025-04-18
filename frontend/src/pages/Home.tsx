import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      {/* Círculos decorativos con animación */}
      <div className="accent-circle top-[-150px] right-[-150px]" />
      <div className="accent-circle bottom-[-150px] left-[-150px]" />
      <div className="accent-circle top-[20%] left-[30%]" style={{ animationDelay: '1s' }} />
      <div className="accent-circle bottom-[30%] right-[20%]" style={{ animationDelay: '2s' }} />

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto principal con animaciones */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium">
                ✨ Sistema de Última Generación
              </span>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Lab Management</span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900">
                  Sistema Inteligente
                </span>
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl animate-fade-in">
              Revoluciona la gestión de tu laboratorio con nuestra plataforma impulsada por IA.
              Optimiza recursos, mejora la eficiencia y toma decisiones basadas en datos en tiempo real.
            </p>
            <div className="flex gap-4">
              <Link
                to="/register"
                className="button-gradient text-white px-8 py-3 rounded-full font-medium text-lg"
              >
                Comenzar Ahora
              </Link>
              <Link
                to="/login"
                className="px-8 py-3 rounded-full font-medium text-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Iniciar Sesión
              </Link>
            </div>
            
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {[
                { number: '99%', label: 'Satisfacción' },
                { number: '24/7', label: 'Soporte' },
                { number: '+1000', label: 'Usuarios' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{stat.number}</div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Panel de características con efecto glass */}
          <div className="animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative glass-effect rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: 'IA Avanzada', icon: '🤖', desc: 'Predicción de mantenimiento' },
                    { title: 'Tiempo Real', icon: '⚡', desc: 'Actualizaciones instantáneas' },
                    { title: 'Analytics', icon: '📊', desc: 'Informes detallados' },
                    { title: 'Seguridad', icon: '🔒', desc: 'Protección avanzada' },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 card-hover"
                    >
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-white/80">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Características principales */}
        <div className="mt-24 space-y-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-gradient">Características Destacadas</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Gestión Inteligente',
                description: 'IA que aprende de tus patrones de uso y optimiza automáticamente los recursos.',
              },
              {
                icon: '⚡',
                title: 'Tiempo Real',
                description: 'Monitoreo en vivo con alertas instantáneas y dashboards actualizados en tiempo real.',
              },
              {
                icon: '📱',
                title: 'Multiplataforma',
                description: 'Accede desde cualquier dispositivo con nuestra interfaz adaptativa y moderna.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white shadow-xl card-hover"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banner de llamada a la acción */}
        <div className="mt-24 text-center">
          <div className="glass-effect p-12 rounded-3xl relative overflow-hidden">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para revolucionar tu laboratorio?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Únete a los laboratorios que ya están transformando su gestión con nuestra plataforma
            </p>
            <Link
              to="/register"
              className="button-gradient text-white px-12 py-4 rounded-full font-medium text-lg inline-block"
            >
              Comenzar Ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
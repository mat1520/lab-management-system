import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Básico',
      price: '29',
      description: 'Ideal para equipos pequeños y laboratorios de prueba',
      features: [
        'Hasta 5 laboratorios',
        'Monitoreo básico de recursos',
        'Soporte por email',
        'Actualizaciones de seguridad',
        'Respaldo semanal'
      ],
      highlighted: false
    },
    {
      name: 'Profesional',
      price: '79',
      description: 'Perfecto para equipos de desarrollo y pruebas',
      features: [
        'Hasta 20 laboratorios',
        'Monitoreo avanzado de recursos',
        'Soporte prioritario',
        'Actualizaciones automáticas',
        'Respaldo diario',
        'API completa',
        'Integración con herramientas de CI/CD'
      ],
      highlighted: true
    },
    {
      name: 'Empresarial',
      price: '199',
      description: 'Para organizaciones grandes con necesidades complejas',
      features: [
        'Laboratorios ilimitados',
        'Monitoreo en tiempo real con alertas',
        'Soporte 24/7',
        'Actualizaciones inmediatas',
        'Respaldo en tiempo real',
        'API personalizada',
        'Integración con sistemas existentes',
        'Cumplimiento normativo',
        'SLA garantizado'
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-background text-text-primary pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Planes y Precios
          </h1>
          <p className="text-text-secondary text-lg">
            Elige el plan que mejor se adapte a tus necesidades y comienza a gestionar tus laboratorios de forma eficiente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`card ${plan.highlighted ? 'border-primary shadow-glow' : ''}`}
            >
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-text-secondary mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-text-secondary">/mes</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/register" 
                  className={`block w-full py-3 px-4 text-center rounded-lg font-medium transition-all duration-300 ${
                    plan.highlighted 
                      ? 'bg-primary text-white hover:bg-primary-dark' 
                      : 'bg-surface text-text-primary hover:bg-surface-light'
                  }`}
                >
                  Comenzar Ahora
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 
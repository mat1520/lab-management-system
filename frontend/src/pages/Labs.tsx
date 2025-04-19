import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter, FiPlus } from 'react-icons/fi';
import LabCard from '../components/LabCard';

// Datos de ejemplo
const mockLabs = [
  {
    id: '1',
    name: 'Laboratorio de Criptografía',
    description: 'Entorno para pruebas de algoritmos criptográficos y seguridad de datos',
    status: 'active' as const,
    users: 8,
    maxUsers: 20,
    cpuUsage: 45,
    memoryUsage: 60,
    lastActivity: 'Hace 5 minutos',
    securityLevel: 'high' as const,
  },
  {
    id: '2',
    name: 'Lab de Análisis de Malware',
    description: 'Sistema aislado para análisis de malware y vulnerabilidades',
    status: 'maintenance' as const,
    users: 0,
    maxUsers: 5,
    cpuUsage: 0,
    memoryUsage: 10,
    lastActivity: 'Hace 2 horas',
    securityLevel: 'high' as const,
  },
  {
    id: '3',
    name: 'Entorno de Pentesting',
    description: 'Laboratorio para pruebas de penetración y seguridad web',
    status: 'active' as const,
    users: 3,
    maxUsers: 10,
    cpuUsage: 30,
    memoryUsage: 45,
    lastActivity: 'Hace 15 minutos',
    securityLevel: 'medium' as const,
  },
];

const Labs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const filteredLabs = mockLabs.filter(lab => {
    const matchesSearch = lab.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lab.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || lab.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-text-primary">Laboratorios</h1>
        <button className="btn-primary flex items-center">
          <FiPlus className="mr-2" />
          Nuevo Laboratorio
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="flex-1 relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-tertiary" />
          <input
            type="text"
            placeholder="Buscar laboratorios..."
            className="input pl-10 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <FiFilter className="text-text-tertiary" />
          <select
            className="input"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="active">Activos</option>
            <option value="maintenance">En Mantenimiento</option>
            <option value="offline">Desconectados</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLabs.map((lab, index) => (
          <motion.div
            key={lab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <LabCard {...lab} />
          </motion.div>
        ))}
      </div>

      {filteredLabs.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">
            No se encontraron laboratorios que coincidan con los criterios de búsqueda.
          </p>
        </div>
      )}
    </div>
  );
};

export default Labs; 
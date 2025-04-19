import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGitBranch, FiClock, FiUser, FiCode, FiLock, FiUnlock } from 'react-icons/fi';

interface Repository {
  id: string;
  name: string;
  description: string;
  lastCommit: {
    message: string;
    author: string;
    date: string;
  };
  branches: number;
  visibility: 'public' | 'private';
  language: string;
  labId: string;
}

const repositories: Repository[] = [
  {
    id: 'repo-1',
    name: 'lab-network-config',
    description: 'Configuraciones y scripts para el laboratorio de redes',
    lastCommit: {
      message: 'feat: añadida configuración de VLANs',
      author: 'admin',
      date: '2024-02-20T10:30:00'
    },
    branches: 3,
    visibility: 'private',
    language: 'Python',
    labId: 'lab-1'
  },
  {
    id: 'repo-2',
    name: 'security-tools',
    description: 'Herramientas de seguridad y análisis de vulnerabilidades',
    lastCommit: {
      message: 'fix: corregido error en escaneo de puertos',
      author: 'security-team',
      date: '2024-02-20T11:15:00'
    },
    branches: 5,
    visibility: 'private',
    language: 'Go',
    labId: 'lab-2'
  },
  {
    id: 'repo-3',
    name: 'dev-environment',
    description: 'Configuración del entorno de desarrollo',
    lastCommit: {
      message: 'chore: actualizadas dependencias',
      author: 'dev-team',
      date: '2024-02-19T18:00:00'
    },
    branches: 2,
    visibility: 'public',
    language: 'TypeScript',
    labId: 'lab-3'
  }
];

const GitRepositories = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-grid-pattern py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Repositorios Git</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Gestiona y accede a los repositorios Git asociados a tus laboratorios virtuales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {repositories.map((repo) => (
            <motion.div
              key={repo.id}
              variants={itemVariants}
              className="cyber-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold font-orbitron gradient-text">
                  {repo.name}
                </h3>
                <span className="flex items-center space-x-1 text-sm">
                  {repo.visibility === 'private' ? (
                    <FiLock className="text-warning" />
                  ) : (
                    <FiUnlock className="text-success" />
                  )}
                  <span className="text-text-secondary">
                    {repo.visibility.toUpperCase()}
                  </span>
                </span>
              </div>

              <p className="text-text-secondary mb-6">
                {repo.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiGitBranch className="text-primary" />
                    <span className="text-text-secondary">Ramas</span>
                  </div>
                  <span className="text-text-primary">
                    {repo.branches}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiCode className="text-primary" />
                    <span className="text-text-secondary">Lenguaje</span>
                  </div>
                  <span className="text-text-primary">
                    {repo.language}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiUser className="text-primary" />
                    <span className="text-text-secondary">Último commit</span>
                  </div>
                  <span className="text-text-secondary text-sm">
                    {repo.lastCommit.message}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FiClock className="text-primary" />
                    <span className="text-text-secondary">Fecha</span>
                  </div>
                  <span className="text-text-secondary text-sm">
                    {new Date(repo.lastCommit.date).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Link
                  to={`/laboratories/${repo.labId}/repositories/${repo.id}`}
                  className="cyber-button-accent flex-1 text-center"
                >
                  Ver Repositorio
                </Link>
                <Link
                  to={`/laboratories/${repo.labId}/repositories/${repo.id}/settings`}
                  className="cyber-button flex-1 text-center"
                >
                  Configuración
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            to="/laboratories/new-repository"
            className="cyber-button-accent inline-block"
          >
            Crear Nuevo Repositorio
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default GitRepositories; 
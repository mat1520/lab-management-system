import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGitBranch, FiCode, FiTerminal, FiCheck, FiX, FiAlertTriangle, FiPlay, FiPause, FiRefreshCw } from 'react-icons/fi';

interface TestResult {
  id: string;
  name: string;
  status: 'success' | 'failure' | 'running' | 'pending';
  duration: string;
  output: string;
  timestamp: string;
}

interface GitTest {
  id: string;
  name: string;
  description: string;
  command: string;
  expectedOutput: string;
  results: TestResult[];
  isRunning: boolean;
}

const gitTests: GitTest[] = [
  {
    id: 'test-1',
    name: 'Verificación de Clonación',
    description: 'Prueba la capacidad de clonar un repositorio Git',
    command: 'git clone https://github.com/ejemplo/repo.git',
    expectedOutput: 'Cloning into \'repo\'...',
    results: [
      {
        id: 'result-1',
        name: 'Clonación Exitosa',
        status: 'success',
        duration: '1.2s',
        output: 'Cloning into \'repo\'...\nremote: Enumerating objects: 100, done.\nremote: Counting objects: 100% (100/100), done.\nremote: Compressing objects: 100% (80/80), done.\nremote: Total 100 (delta 20), reused 100 (delta 20), pack-reused 0\nReceiving objects: 100% (100/100), 10.5 MiB | 2.5 MiB/s, done.\nResolving deltas: 100% (20/20), done.',
        timestamp: '2024-02-20T10:30:00'
      },
      {
        id: 'result-2',
        name: 'Clonación Fallida',
        status: 'failure',
        duration: '0.8s',
        output: 'fatal: repository \'https://github.com/ejemplo/repo.git\' not found',
        timestamp: '2024-02-19T15:45:00'
      }
    ],
    isRunning: false
  },
  {
    id: 'test-2',
    name: 'Verificación de Push',
    description: 'Prueba la capacidad de enviar cambios a un repositorio remoto',
    command: 'git push origin main',
    expectedOutput: 'Enumerating objects: 5, done.',
    results: [
      {
        id: 'result-3',
        name: 'Push Exitoso',
        status: 'success',
        duration: '0.5s',
        output: 'Enumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nDelta compression using up to 8 threads\nCompressing objects: 100% (3/3), done.\nWriting objects: 100% (3/3), 288 bytes | 288.00 KiB/s, done.\nTotal 3 (delta 2), reused 0 (delta 0)\nTo https://github.com/ejemplo/repo.git\n   a1b2c3d..e4f5g6h  main -> main',
        timestamp: '2024-02-20T11:15:00'
      }
    ],
    isRunning: false
  },
  {
    id: 'test-3',
    name: 'Verificación de Merge',
    description: 'Prueba la capacidad de fusionar ramas en Git',
    command: 'git merge feature-branch',
    expectedOutput: 'Updating a1b2c3d..e4f5g6h',
    results: [
      {
        id: 'result-4',
        name: 'Merge Exitoso',
        status: 'success',
        duration: '0.3s',
        output: 'Updating a1b2c3d..e4f5g6h\nFast-forward\n src/main.js | 2 ++\n 1 file changed, 2 insertions(+)',
        timestamp: '2024-02-20T09:30:00'
      },
      {
        id: 'result-5',
        name: 'Conflicto de Merge',
        status: 'failure',
        duration: '0.7s',
        output: 'Auto-merging src/main.js\nCONFLICT (content): Merge conflict in src/main.js\nAutomatic merge failed; fix conflicts and then commit the result.',
        timestamp: '2024-02-19T14:20:00'
      }
    ],
    isRunning: false
  }
];

const GitTesting = () => {
  const [tests, setTests] = useState<GitTest[]>(gitTests);
  const [selectedTest, setSelectedTest] = useState<string | null>(null);

  const runTest = (testId: string) => {
    setTests(prevTests => 
      prevTests.map(test => 
        test.id === testId 
          ? { ...test, isRunning: true } 
          : test
      )
    );

    // Simulación de ejecución de prueba
    setTimeout(() => {
      const newResult: TestResult = {
        id: `result-${Date.now()}`,
        name: `Ejecución ${new Date().toLocaleTimeString()}`,
        status: Math.random() > 0.3 ? 'success' : 'failure',
        duration: `${(Math.random() * 2).toFixed(1)}s`,
        output: Math.random() > 0.3 
          ? 'Operación completada con éxito.\nCambios aplicados correctamente.'
          : 'Error: No se pudo completar la operación.\nVerifica los permisos y la conexión.',
        timestamp: new Date().toISOString()
      };

      setTests(prevTests => 
        prevTests.map(test => 
          test.id === testId 
            ? { 
                ...test, 
                isRunning: false,
                results: [newResult, ...test.results]
              } 
            : test
        )
      );
    }, 2000);
  };

  const getStatusIcon = (status: TestResult['status']) => {
    switch (status) {
      case 'success':
        return <FiCheck className="text-success" />;
      case 'failure':
        return <FiX className="text-error" />;
      case 'running':
        return <FiRefreshCw className="text-primary animate-spin" />;
      case 'pending':
        return <FiAlertTriangle className="text-warning" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: TestResult['status']) => {
    switch (status) {
      case 'success':
        return 'text-success';
      case 'failure':
        return 'text-error';
      case 'running':
        return 'text-primary';
      case 'pending':
        return 'text-warning';
      default:
        return 'text-text-secondary';
    }
  };

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
          <h1 className="section-title">Pruebas de Git</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Ejecuta y monitorea pruebas de operaciones Git en tus laboratorios virtuales.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-1">
            <div className="cyber-card p-6">
              <h2 className="text-xl font-bold font-orbitron gradient-text mb-6">
                Pruebas Disponibles
              </h2>
              <div className="space-y-4">
                {tests.map(test => (
                  <div 
                    key={test.id}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedTest === test.id 
                        ? 'bg-primary/10 border border-primary/50' 
                        : 'bg-background-light/30 hover:bg-background-light/50'
                    }`}
                    onClick={() => setSelectedTest(test.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-text-primary">{test.name}</h3>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          runTest(test.id);
                        }}
                        className={`p-2 rounded-full ${
                          test.isRunning 
                            ? 'bg-primary/20 text-primary' 
                            : 'bg-background-light/50 text-text-secondary hover:bg-primary/20 hover:text-primary'
                        }`}
                        disabled={test.isRunning}
                      >
                        {test.isRunning ? <FiRefreshCw className="animate-spin" /> : <FiPlay />}
                      </button>
                    </div>
                    <p className="text-sm text-text-secondary">{test.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            {selectedTest ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="cyber-card p-6"
              >
                {tests.map(test => test.id === selectedTest && (
                  <div key={test.id}>
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-xl font-bold font-orbitron gradient-text">
                        {test.name}
                      </h2>
                      <div className="flex items-center space-x-2">
                        <span className="text-text-secondary text-sm">Comando:</span>
                        <code className="bg-background-light/50 px-3 py-1 rounded-md text-sm font-mono">
                          {test.command}
                        </code>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-lg font-medium mb-4">Resultados</h3>
                      <div className="space-y-4">
                        {test.results.map(result => (
                          <div 
                            key={result.id}
                            className="bg-background-light/30 p-4 rounded-lg"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                {getStatusIcon(result.status)}
                                <span className={`font-medium ${getStatusColor(result.status)}`}>
                                  {result.name}
                                </span>
                              </div>
                              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                                <span>{result.duration}</span>
                                <span>{new Date(result.timestamp).toLocaleString()}</span>
                              </div>
                            </div>
                            <pre className="bg-background-light/50 p-3 rounded-md text-sm font-mono overflow-x-auto">
                              {result.output}
                            </pre>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        onClick={() => runTest(test.id)}
                        disabled={test.isRunning}
                        className={`cyber-button-accent ${
                          test.isRunning ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                      >
                        {test.isRunning ? (
                          <span className="flex items-center">
                            <FiRefreshCw className="mr-2 animate-spin" />
                            Ejecutando...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <FiPlay className="mr-2" />
                            Ejecutar Prueba
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="cyber-card p-6 flex items-center justify-center h-full"
              >
                <div className="text-center">
                  <FiTerminal className="text-4xl text-primary mb-4" />
                  <p className="text-text-secondary">
                    Selecciona una prueba para ver sus detalles y resultados
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GitTesting; 
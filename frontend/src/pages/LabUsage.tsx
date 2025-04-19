import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCpu, FiMemory, FiUsers, FiClock, FiActivity, FiAlertTriangle, FiBarChart2 } from 'react-icons/fi';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LabUsage {
  id: string;
  name: string;
  cpuHistory: number[];
  memoryHistory: number[];
  userHistory: number[];
  alerts: {
    type: 'warning' | 'error' | 'info';
    message: string;
    timestamp: string;
  }[];
}

const mockLabUsage: LabUsage[] = [
  {
    id: 'lab-1',
    name: 'Laboratorio de Redes',
    cpuHistory: [45, 52, 48, 60, 55, 58, 62, 65, 70, 68],
    memoryHistory: [60, 65, 70, 75, 80, 82, 85, 88, 90, 92],
    userHistory: [5, 6, 7, 8, 7, 6, 5, 4, 3, 2],
    alerts: [
      {
        type: 'warning',
        message: 'Uso de CPU por encima del 80%',
        timestamp: '2024-02-20T10:30:00'
      },
      {
        type: 'error',
        message: 'Memoria crítica - 92% utilizada',
        timestamp: '2024-02-20T11:15:00'
      }
    ]
  },
  {
    id: 'lab-2',
    name: 'Laboratorio de Ciberseguridad',
    cpuHistory: [75, 78, 82, 85, 88, 90, 92, 95, 93, 90],
    memoryHistory: [80, 82, 85, 88, 90, 92, 95, 98, 96, 94],
    userHistory: [3, 4, 5, 6, 7, 8, 7, 6, 5, 4],
    alerts: [
      {
        type: 'error',
        message: 'Uso crítico de recursos',
        timestamp: '2024-02-20T11:00:00'
      }
    ]
  }
];

const LabUsage: React.FC = () => {
  const [selectedLab, setSelectedLab] = useState<string>(mockLabUsage[0].id);
  const [timeRange, setTimeRange] = useState<'1h' | '6h' | '24h'>('1h');

  const selectedLabData = mockLabUsage.find(lab => lab.id === selectedLab);

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Uso de Recursos',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const getChartData = () => ({
    labels: Array.from({ length: 10 }, (_, i) => `${i + 1}m`),
    datasets: [
      {
        label: 'CPU (%)',
        data: selectedLabData?.cpuHistory || [],
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Memoria (%)',
        data: selectedLabData?.memoryHistory || [],
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Usuarios',
        data: selectedLabData?.userHistory || [],
        borderColor: 'rgb(53, 162, 235)',
        tension: 0.1,
      },
    ],
  });

  const getAlertColor = (type: 'warning' | 'error' | 'info') => {
    switch (type) {
      case 'warning':
        return 'text-warning';
      case 'error':
        return 'text-error';
      case 'info':
        return 'text-info';
      default:
        return 'text-text-secondary';
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
          <h1 className="section-title">Monitoreo de Laboratorios</h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Visualiza el uso de recursos y el estado de los laboratorios en tiempo real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Selector de Laboratorio */}
          <div className="lg:col-span-1">
            <div className="cyber-card p-6">
              <h2 className="text-xl font-bold font-orbitron gradient-text mb-6">
                Laboratorios
              </h2>
              <div className="space-y-4">
                {mockLabUsage.map(lab => (
                  <button
                    key={lab.id}
                    onClick={() => setSelectedLab(lab.id)}
                    className={`w-full p-4 rounded-xl transition-all duration-300 ${
                      selectedLab === lab.id
                        ? 'bg-primary text-white'
                        : 'bg-surface-light hover:bg-surface-light/80 text-text'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{lab.name}</span>
                      <FiActivity className={`w-5 h-5 ${
                        selectedLab === lab.id ? 'text-white' : 'text-primary'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gráficos y Estadísticas */}
          <div className="lg:col-span-2">
            <div className="cyber-card p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold font-orbitron gradient-text">
                  Uso de Recursos
                </h2>
                <div className="flex space-x-2">
                  {(['1h', '6h', '24h'] as const).map(range => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                        timeRange === range
                          ? 'bg-primary text-white'
                          : 'bg-surface-light hover:bg-surface-light/80 text-text'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-80 mb-8">
                <Line options={chartOptions} data={getChartData()} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="cyber-card p-4">
                  <div className="flex items-center space-x-3">
                    <FiCpu className="text-primary w-6 h-6" />
                    <div>
                      <p className="text-text-secondary text-sm">CPU Actual</p>
                      <p className="text-xl font-bold">
                        {selectedLabData?.cpuHistory[selectedLabData.cpuHistory.length - 1]}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-4">
                  <div className="flex items-center space-x-3">
                    <FiMemory className="text-primary w-6 h-6" />
                    <div>
                      <p className="text-text-secondary text-sm">Memoria Actual</p>
                      <p className="text-xl font-bold">
                        {selectedLabData?.memoryHistory[selectedLabData.memoryHistory.length - 1]}%
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cyber-card p-4">
                  <div className="flex items-center space-x-3">
                    <FiUsers className="text-primary w-6 h-6" />
                    <div>
                      <p className="text-text-secondary text-sm">Usuarios Activos</p>
                      <p className="text-xl font-bold">
                        {selectedLabData?.userHistory[selectedLabData.userHistory.length - 1]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alertas */}
            <div className="cyber-card p-6 mt-8">
              <h2 className="text-xl font-bold font-orbitron gradient-text mb-6">
                Alertas Recientes
              </h2>
              <div className="space-y-4">
                {selectedLabData?.alerts.map((alert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-surface-light"
                  >
                    <FiAlertTriangle className={`w-5 h-5 mt-1 ${getAlertColor(alert.type)}`} />
                    <div>
                      <p className="text-text-primary">{alert.message}</p>
                      <p className="text-text-secondary text-sm">
                        {new Date(alert.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabUsage; 
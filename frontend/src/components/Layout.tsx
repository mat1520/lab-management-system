import React, { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <header className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Lab Management System</h1>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-md ${
              theme === 'dark'
                ? 'bg-gray-700 hover:bg-gray-600'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      </header>
      <main className="container mx-auto p-4">
        {children}
      </main>
      <footer className={`p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Lab Management System</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 
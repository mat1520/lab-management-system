import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Lab Management System</h1>
      <p className="text-xl mb-8">Manage your laboratory resources efficiently</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-lg shadow-md bg-blue-50">
          <h2 className="text-2xl font-semibold mb-3">Lab Management</h2>
          <p>Track and manage laboratory resources with ease</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-green-50">
          <h2 className="text-2xl font-semibold mb-3">Resource Scheduling</h2>
          <p>Schedule and coordinate lab resources efficiently</p>
        </div>
        <div className="p-6 rounded-lg shadow-md bg-purple-50">
          <h2 className="text-2xl font-semibold mb-3">Real-time Updates</h2>
          <p>Get instant updates on lab status and availability</p>
        </div>
      </div>
    </div>
  );
};

export default Home; 
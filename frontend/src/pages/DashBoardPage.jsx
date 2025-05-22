import React from 'react';
import DashboardLayout from '../components/DashBoardLayout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold text-gray-800">Welcome to your Dashboard!</h1>
      <p className="mt-2 text-gray-600">You can manage your tasks here.</p>
    </DashboardLayout>
  );
};

export default DashboardPage;

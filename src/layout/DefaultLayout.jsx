import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="flex min-h-screen ">

      {/* Main Content Area */}
    <div className="flex-1 flex flex-col ">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100 ml-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
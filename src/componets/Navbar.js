import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">Banking Suite</Link>
        </div>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/dashboard" className="text-white">Dashboard</Link>
          <Link to="/reports" className="text-white">Reports</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

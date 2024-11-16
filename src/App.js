/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';  // Ensure 'components' is spelled correctly
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import ProtectedRoute from './componets/ProtectedRoute';  // Ensure 'components' is spelled correctly
import Login from './pages/Login';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Protected routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/reports" 
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          } 
        />

        {/* Login route */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;

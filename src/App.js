/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';  // Ensure correct spelling
import Home from './pages/Home';
import Reports from './pages/Reports';
import ProtectedRoute from './componets/ProtectedRoute';  // Ensure correct spelling
import Login from './pages/Login';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import Dashboard from './pages/Dashboard';
import TrialBalance from './pages/TrialBalance';
import InvoiceGenerator from './pages/InvoiceGenerator';

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
        <Route 
    path="/trial-balance" 
          element={
            <ProtectedRoute>
              <TrialBalance />
            </ProtectedRoute>
        } 
        />
                <Route 
    path="/invoice-generator" 
          element={
            <ProtectedRoute>
              <InvoiceGenerator />
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

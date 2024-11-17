import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types'; // Import PropTypes

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600"></div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return children;
};

// Add PropTypes validation for children
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired, // Validate that children is passed as a node
};

export default ProtectedRoute;

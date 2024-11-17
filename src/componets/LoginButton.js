import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex justify-center items-center h-screen">
      <button 
        onClick={() => loginWithRedirect()} 
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;

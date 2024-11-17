import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <h1 className="text-4xl font-bold">Welcome to Banking Suite</h1>
      <button 
        onClick={() => loginWithRedirect()} 
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Log In
      </button>
      <button 
        onClick={() => loginWithRedirect({ screen_hint: 'signup' })} 
        className="px-4 py-2 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition"
      >
        Sign Up
      </button>
    </div>
  );
};

export default Login;

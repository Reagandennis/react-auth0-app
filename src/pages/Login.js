import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-4">Login to Your Account</h1>
      <button
        onClick={() => loginWithRedirect()}
        className="bg-blue-600 text-white p-3 rounded-md"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;

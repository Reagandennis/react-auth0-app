import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { isAuthenticated, user, loginWithRedirect, logout, isLoading } = useAuth0();
  const [authState, setAuthState] = useState({ isAuthenticated, user });

  useEffect(() => {
    setAuthState({ isAuthenticated, user });
  }, [isAuthenticated, user]);

  const login = () => loginWithRedirect();
  const signOut = () => logout({ returnTo: window.location.origin });

  return (
    <AuthContext.Provider value={{ authState, login, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

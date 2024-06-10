import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const saveAuthToken = (token) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  const removeAuthToken = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, saveAuthToken, removeAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

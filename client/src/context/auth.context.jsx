import React, { createContext, useContext, useState , useEffect } from 'react';
import axios from 'axios'
 const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    const checkAuthWithToekn = async ()=>{
      try {
        const response = await axios.get
      } catch (error) {
        setIsAuthenticated(false)
      }
    }
  })

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => {
    return useContext(AuthContext);
  };

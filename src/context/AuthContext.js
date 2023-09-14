import React, { createContext, useContext, useState } from 'react';

// Create the authentication context
const AuthContext = createContext();

// Custom hook to use the context in components
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); // User state, initially null
    const [isShowLogin, setIsShowLogin] = useState(false);
    const [isShowRegister, setIsShowRegister] = useState(false);
    // Define functions for login, logout, or any other authentication-related actions
    const login = (user) => {
      setUser(user);
    };
  
    const logout = () => {
      setUser(null);
    };

    const toggleLogin = () => {
      setIsShowLogin((isShowLogin) => !isShowLogin);
    }

    const toggleRegister = () => {
      setIsShowRegister((isShowRegister) => !isShowRegister);
    }
  
    // Provide the authentication context with the user state and functions
    return (
      <AuthContext.Provider value={{ user, setUser, login, logout, toggleLogin, toggleRegister, isShowLogin, isShowRegister }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export { AuthProvider };
  
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const backEndUrl = import.meta.env.VITE_BACKEND_URL;


  const login = (loginResponse) => {
    const { user, token } = loginResponse;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token); 
    setUser(user);
  };


  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, backEndUrl }}>
      {children}
    </AuthContext.Provider>
  );
};

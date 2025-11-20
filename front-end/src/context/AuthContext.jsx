import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const backEndUrl = import.meta.env.VITE_BACKEND_URL;

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  // Load user from backend
  const getSingleUser = async (id) => {
    try {
      const res = await axios.get(`${backEndUrl}/user/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.user);
    } catch (err) {
      console.log("Error fetching user:", err);
    }
  };

  // Auto login if token exists
  useEffect(() => {
    if (token) {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser) {
        setUser(storedUser);
      }
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
        backEndUrl,
        getSingleUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const storedAuth = localStorage.getItem("isAuthenticated") === "true";

  const [Auth, setAuth] = useState({
    isAuthenticated: storedAuth,
    user: null,
  });
  const [loading, setLoading] = useState(true);

  const login = (client) => {
    console.log(client);
    setAuth({ isAuthenticated: true, user: client });
    localStorage.setItem("isAuthenticated", "true");
  };

  const logout = () => {
    console.log("logout");
    setAuth({ isAuthenticated: false, user: null });
    localStorage.setItem("isAuthenticated", "false");
  };

  useEffect(() => {
    if (!Auth.isAuthenticated) {
      setLoading(false);
      return;
    }

    fetch("http://148.113.45.177:3030/auth/user", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.response?.client) {
          login(data.response.client);
        }
      })
      .catch(() => {
        console.log("error");
        logout();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [Auth.isAuthenticated]);

  return (
    <AuthContext.Provider value={{ Auth, login, logout }}>
      {!loading ? children : <div>Chargement...</div>}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };

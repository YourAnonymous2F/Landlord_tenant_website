import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock authentication check on mount
  useEffect(() => {
    const checkAuth = async () => {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      const storedUser = localStorage.getItem("mock_user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email, _password) => {
    // Mock login logic
    await new Promise((resolve) => setTimeout(resolve, 800));
    const mockUser = {
      id: "1",
      email,
      name: "John Doe",
      role: "landlord", // Default to landlord for testing
    };
    localStorage.setItem("mock_user", JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const register = async (email, _password, name, role) => {
    // Mock register logic
    await new Promise((resolve) => setTimeout(resolve, 800));
    const mockUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role,
    };
    localStorage.setItem("mock_user", JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    localStorage.removeItem("mock_user");
    setUser(null);
  };

  const value = {
    user,
    login,
    register,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

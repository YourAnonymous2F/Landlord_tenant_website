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

  const login = async (email, password) => {
    // Mock login logic
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Retrieve registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem("registered_users") || "[]");
    const existingUser = registeredUsers.find(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );

    if (!existingUser) {
      throw new Error("Account not registered");
    }

    if (existingUser.password !== password) {
      throw new Error("Incorrect password");
    }

    localStorage.setItem("mock_user", JSON.stringify(existingUser));
    setUser(existingUser);
    return existingUser;
  };

  const register = async (email, password, name, role) => {
    // Mock register logic
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Retrieve existing registered users list
    const registeredUsers = JSON.parse(localStorage.getItem("registered_users") || "[]");
    
    // Prevent duplicate emails during registration
    const emailExists = registeredUsers.some(
      (u) => u.email.toLowerCase() === email.toLowerCase()
    );
    if (emailExists) {
      throw new Error("Email already registered");
    }

    const mockUser = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      password, // Store password to verify during login
      name,
      role,
    };
    
    registeredUsers.push(mockUser);
    localStorage.setItem("registered_users", JSON.stringify(registeredUsers));
    
    localStorage.setItem("mock_user", JSON.stringify(mockUser));
    setUser(mockUser);
    return mockUser;
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

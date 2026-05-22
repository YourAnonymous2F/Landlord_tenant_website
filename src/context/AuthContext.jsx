import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile, 
  onAuthStateChanged 
} from "firebase/auth";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const translateFirebaseError = (error) => {
  switch (error.code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
      return new Error("Incorrect password or email.");
    case "auth/user-not-found":
      return new Error("Account not registered.");
    case "auth/email-already-in-use":
      return new Error("Email already registered.");
    case "auth/weak-password":
      return new Error("Password should be at least 6 characters.");
    case "auth/invalid-email":
      return new Error("Invalid email address.");
    default:
      return new Error(error.message || "An authentication error occurred.");
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sync auth state on mount
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        let name = "User";
        let role = "landlord";

        if (firebaseUser.displayName) {
          try {
            const parsed = JSON.parse(firebaseUser.displayName);
            name = parsed.name || firebaseUser.displayName;
            role = parsed.role || "landlord";
          } catch (e) {
            name = firebaseUser.displayName;
          }
        }

        setUser({
          id: firebaseUser.uid,
          email: firebaseUser.email,
          name,
          role,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      let name = "User";
      let role = "landlord";

      if (firebaseUser.displayName) {
        try {
          const parsed = JSON.parse(firebaseUser.displayName);
          name = parsed.name || firebaseUser.displayName;
          role = parsed.role || "landlord";
        } catch (e) {
          name = firebaseUser.displayName;
        }
      }

      const loggedInUser = {
        id: firebaseUser.uid,
        email: firebaseUser.email,
        name,
        role,
      };

      setUser(loggedInUser);
      return loggedInUser;
    } catch (error) {
      throw translateFirebaseError(error);
    }
  };

  const register = async (email, password, name, role) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      // Store the custom name and role in the profile's displayName
      await updateProfile(firebaseUser, {
        displayName: JSON.stringify({ name, role })
      });

      const newUser = {
        id: firebaseUser.uid,
        email: firebaseUser.email,
        name,
        role,
      };

      setUser(newUser);
      return newUser;
    } catch (error) {
      throw translateFirebaseError(error);
    }
  };

  const logout = async () => {
    await signOut(auth);
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

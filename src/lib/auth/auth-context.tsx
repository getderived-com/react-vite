import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string, provider?: string) => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const token = localStorage.getItem("AUTH_TOKEN");

      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const login = (token: string, provider?: string) => {
    localStorage.setItem("AUTH_TOKEN", token);
    if (provider) {
      localStorage.setItem("AUTH_PROVIDER", provider);
    }
    setIsAuthenticated(true);
  };

  const logout = async () => {
    localStorage.removeItem("AUTH_TOKEN");
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout,
    checkAuth,
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();
  return (
    <AuthContext.Provider value={auth}>
      {auth.isLoading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

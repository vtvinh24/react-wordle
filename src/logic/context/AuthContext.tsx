import { jwtDecode } from "jwt-decode";
import React, { createContext, useState, ReactNode, useContext, useEffect } from "react";

interface AuthContextProps {
  login: () => void;
  logout: () => void;
  register: () => void;
  forgotPassword: () => void;
  resetPassword: () => void;
  requestToken: () => void;
  getUserData: () => void;
  token: string | null;
  refreshToken: string | null;
  userId: string | null;
  user: object | null;
  userGameData: object | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [user, setUser] = useState<object | null>(null);
  const [userGameData, setUserGameData] = useState<object | null>(null);

  useEffect(() => {
    // On token change, get user id by decoding token
    // If token is expired, call requestToken()
    if (!token) return;
    const decodedToken = token ? jwtDecode(token) : null;
    const exp = decodedToken ? decodedToken.exp : 0;
    const currentTime = Date.now() / 1000;
    if (!exp) return;
    if (exp < currentTime) {
      requestToken();
    } else {
      setUserId(decodedToken ? decodedToken.userId : null);
    }
  }, [token]);

  useEffect(() => {
    // Check if user is logged in
    // If logged in, call getUserData()
  }, [userId]);

  const getUserData = () => {
    if (!userId) return;
    // Get user data logic
    setUser({});
    setUserGameData({});
  };

  const requestToken = () => {
    // Request token logic
    // call GET /auth
    setToken("token");
  };

  const login = () => {
    // Login logic
    setRefreshToken("refreshToken");
  };

  const logout = () => {
    // Logout logic
  };

  const clearData = () => {
    setToken(null);
    setRefreshToken(null);
    setUserId(null);
    setUser(null);
    setUserGameData(null);
  };

  const register = () => {
    // Register logic
  };

  const forgotPassword = () => {
    // Forgot password logic
  };

  const resetPassword = () => {
    // Reset password logic
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        register,
        forgotPassword,
        resetPassword,
        requestToken,
        getUserData,
        token,
        refreshToken,
        userId,
        user,
        userGameData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthContext, AuthProvider, useAuth };

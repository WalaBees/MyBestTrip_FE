// src/auth/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

type User = { email: string; name: string } | null;

type AuthContextType = {
  user: User;
  login: (u: NonNullable<User>) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    // 예: localStorage 복원 (선택)
    const raw = localStorage.getItem("user");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  const login = (u: NonNullable<User>) => {
    setUser(u);
    localStorage.setItem("user", JSON.stringify(u)); // 선택
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // 선택
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

import { createContext, useState, useEffect, type ReactNode } from "react";

// 👇 Define the shape of our user object
export interface User {
  role: string;
}

// 👇 Define the context type
export interface AuthContextType {
  token: string | null;
  user: User | null;
  login: (token: string, role: string) => void;
  logout: () => void;
}

// 👇 Create the context with an initial placeholder
export const AuthContext = createContext<AuthContextType>({
  token: null,
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("user") || "null")
  );

  // 👇 Persist token/user changes to localStorage
  useEffect(() => {
    if (token) localStorage.setItem("token", token);
    else localStorage.removeItem("token");

    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [token, user]);

  // 👇 Login handler
  const login = (newToken: string, role: string) => {
    setToken(newToken);
    setUser({ role });
    localStorage.setItem("token", newToken);
    localStorage.setItem("user", JSON.stringify({ role }));
  };

  // 👇 Logout handler
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value: AuthContextType = {
    token,
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

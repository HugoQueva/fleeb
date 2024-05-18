"use client";

import { User } from "@/constants/types";
import { getUser } from "@/lib/api/account";
import React, { createContext, useContext, useEffect, useState } from "react";

const INITIAL_USER = {
  id: "",
  name: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  isLoading: false,
  isAuthenticated: false,
  setUser: () => {},
  setIsAuthenticated: () => {},
  checkAuthUser: async () => false as boolean,
};

type IAuthContext = {
  user: User;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};

const AuthContext = createContext<IAuthContext>(INITIAL_STATE);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User>(INITIAL_USER);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const checkAuthUser = async () => {
    setIsLoading(true);
    try {
      const user = getUser();

      await user
        .then((model) => {
          const userInfo = {
            id: model.$id,
            name: model.name,
          };

          setUser(userInfo);
          setIsAuthenticated(true);
          setIsLoading(false);
          return true;
        })
        .catch((err) => {
          setIsLoading(false);
          return false;
        });
    } catch (err) {
      console.error(
        "[AUTH CONTEXT]: Failed to check if user is logged in (500)"
      );
    } finally {
      setIsLoading(false);
      return false;
    }
  };

  useEffect(() => {
    const cookieFallback = localStorage.getItem("cookieFallback");

    if (
      cookieFallback === undefined ||
      cookieFallback === null ||
      cookieFallback === "[]"
    ) {
      return;
    }

    checkAuthUser();
  }, []);

  const values = {
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

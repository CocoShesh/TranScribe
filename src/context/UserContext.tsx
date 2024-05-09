import React, { createContext, useState, useContext } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type userContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type userContextProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext({} as userContextType);

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: userContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

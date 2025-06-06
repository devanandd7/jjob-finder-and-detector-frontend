import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  user: { email: string } | null;
  userId: string | null;
  loading: boolean;
  signOut: () => void;
}

export const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);

  const value: UserContextType = {
    user,
    userId,
    loading,
    signOut: () => {
      setUser(null);
      setUserId(null);
    }
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
} 
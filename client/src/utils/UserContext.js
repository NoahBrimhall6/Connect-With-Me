import React, { createContext, useContext, useState } from 'react';

// Initialize new context for the User
const UserContext = createContext();

// Create a custom hook
export const useCurrentUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    name: 'Noah',
    value: 'Test'
  });

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

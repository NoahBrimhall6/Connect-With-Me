import React, { createContext, useContext, useEffect, useState } from 'react';

// Initialize new context for the User
const UserContext = createContext();

// Create a custom hook
export const useCurrentUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({
    loggedIn: false,
    user: {}
  });

  const logUserIn = (user) => {
    if (currentUser.loggedIn) {
      console.log('A user is already logged in!');
      return;
    };

    setCurrentUser({
      loggedIn: true,
      user: user
    });
  };

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  const logUserOut = () => {
    if (!currentUser.loggedIn) {return};

    setCurrentUser({
      loggedIn: false,
      user: {}
    });
  }

  return (
    <UserContext.Provider value={{ currentUser, logUserIn, logUserOut }}>
      {children}
    </UserContext.Provider>
  );
};

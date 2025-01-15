import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState("Working");

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};
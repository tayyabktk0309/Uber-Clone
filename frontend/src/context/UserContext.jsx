import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();

export const UserContext = ({ children }) => {
    const [user, setUser] = useState({});

    return (
        <UserDataContext.Provider value={{ user, setUser }}>
            {children}
        </UserDataContext.Provider>
    );
};
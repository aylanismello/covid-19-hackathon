import React, { createContext, useState, useEffect } from 'react';
import app from '../../config/firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null);
    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrUser);
    }, []);

    return(
        <AuthContext.Provider value={ { currUser } } >
            {children}
        </AuthContext.Provider>
    )
}
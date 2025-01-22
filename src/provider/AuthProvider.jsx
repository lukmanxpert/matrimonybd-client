/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config"

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            }
        })
        return () => unsubscribe()
    }, [])
    const googleProvider = new GoogleAuthProvider();


    // login with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // signout user
    const logOutUser = () => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        loginWithGoogle,
        logOutUser
    }
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

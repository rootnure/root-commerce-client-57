import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import auth from '../firebase/firebase.config';

export const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateInfo = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName, photoURL
        })
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    const authFunctionalities = {
        user,
        loading,
        createUser,
        signIn,
        updateInfo,
        googleLogin,
        logOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={authFunctionalities}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default AuthProvider;
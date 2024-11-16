import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../FireBase/FireBase.config";
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // State to hold the current authenticated user
    const [user, setUser] = useState(null);

     // State to manage loading status during authentication state changes
    const [loader, setLoader] = useState(true);

    // Function to create a new user with email and password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Function to update the user's profile information
    const updateUserProfile = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }

     // Function to sign in an existing user with email and password
    const singInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

     // Function to log out the current user
    const logOut = () =>{
        return signOut(auth)
    }

    // Object to pass down through the AuthContext.Provider for use by other components
    const authInfo = {
        user,
        setUser,
        createUser,
        logOut,
        singInUser,
        updateUserProfile,
        loader
    }

    // Effect to monitor authentication state changes and set the user and loader state accordingly
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoader(false);
        })
        return ()=>{
            unsubscribe();
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
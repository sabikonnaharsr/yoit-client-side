import React, { createContext, useEffect, useState} from 'react';
import app from '../Firebase/Firebase.config';
import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, signInWithPopup } from 'firebase/auth'
export const AuthContext = createContext();


const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    

    // signup for create user
    const createUser =  ( email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    

    //signIn
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // onAuth
    useEffect(() => {
       const unsubscribe =  onAuthStateChanged(auth, currentUser => {
        console.log('user observing')
        setUser(currentUser)
        setLoading(false)
       }) 
      return () => unsubscribe();
    }, [])


    // logOut
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    //update user
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }


    //google signIn
    const googleSignIn = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };


    // github
    const githubSingIn = (provider) => {
        return signInWithPopup(auth, provider);
    };


    // authInfo
    const authInfo = {
      createUser, signIn, logOut, user, updateUser, loading, googleSignIn, githubSingIn
    }

    
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
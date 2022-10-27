import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth' 
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children}) => {
    const [user,setUser] = useState(null) 
    const [loading,setLoading] = useState(true) 
     //google
    const providerLogin = (provider) =>{
            setLoading(true)
            return signInWithPopup(auth,provider) 
    }

    //gitHub
    const githuProvider=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider) 
    }

    //userWithEmailPassword
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword (auth,email,password) 
    }

    //signIn
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword (auth,email,password) 
    }
    //updateProfile
    const userUpdateProfile = (profile)=>{
         return updateProfile(auth.currentUser,profile)

    }

    // verifyEmail
    const verifyEmail =()=>{
        return sendEmailVerification(auth.currentUser)
    }



    // signout
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    } 
    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser===null || currentUser.emailVerified){
                setUser(currentUser)  
            }
            
            setLoading(false) 
        });
        return ()=> {
            unsubscribe() 
        }
    },[])
    const authInfo  = {user,providerLogin,logOut,createUser,signIn,githuProvider,setLoading,loading,userUpdateProfile,verifyEmail}
    return (
        <AuthContext.Provider value = { authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
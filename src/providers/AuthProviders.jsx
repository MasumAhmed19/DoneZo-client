import { createContext, useEffect, useState } from "react";
import { app } from '../firebase/firebase.config'
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
  } from 'firebase/auth'
import axios from 'axios';


export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
  
    const signInWithGoogle = async () => {
      setLoading(true)
      try{
        const result = await signInWithPopup(auth, googleProvider);
        const data = result.user;

        const userData = {
          email: data.email,
          displayName: data.displayName,
          photoURL: data.photoURL,
        }

        const response = await axios.post(`${import.meta.env.VITE_URL}/add-users`, userData)

      }catch(err){
        console.log(err)
      }
    }
  
    const logOut = async () => {
      setLoading(true)
      return signOut(auth)
    }
  
  
    // onAuthStateChange
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
          
          if(currentUser?.email){
            console.log("current user--->", currentUser?.uid)
 
            setUser(currentUser)

          }else{
            setUser(currentUser)

          }
          setLoading(false);
        });
        
        return () => {
          unsubscribe();
        };
      }, []);
   
    const authInfo = {
      user,
      setUser,
      loading,
      setLoading,
      signInWithGoogle,
      logOut,
    }
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
  }

export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import { app } from '../firebase/firebase.config'
import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
  } from 'firebase/auth'

export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
  
    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
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
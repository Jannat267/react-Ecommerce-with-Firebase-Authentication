import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const[user,setUser]=useState({});
    const auth = getAuth();
    const googleProvider=new GoogleAuthProvider();
    const singInUsingGoogle=()=>
    {
        return signInWithPopup(auth,googleProvider)
         
    }
    const logOut=()=>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    }
    // observe whether user auth state changed or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user);
              
            } else {
              
            }
          });
    },[])
    
    return {
        user,
        singInUsingGoogle,
        logOut,

    }
}
export default useFirebase;


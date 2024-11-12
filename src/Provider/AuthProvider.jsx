import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const Authcontext = createContext(null);

const AuthProvider = ({ children }) => {


    const [ user, setUser]= useState(null)
  const name = "potato alu  mia";
  
  const signinUser= (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password);
  }
  const crateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }


useEffect(()=>{
  const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
        console.log("current User",currentUser);
        setUser(currentUser)
        
    })
    return ()=>{
        unsubscribe
    }
},[])
const SignoutUser=()=>{
return signOut(auth)
}

  const auntinfo = {
    name,crateUser,signinUser,user,SignoutUser
  };




  return (
    <Authcontext.Provider value={auntinfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;

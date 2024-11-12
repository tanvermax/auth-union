import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";

export const Authcontext = createContext(null);
const Gprovider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

  const SignInGoole=()=>{
    return signInWithPopup(auth,Gprovider)
  }


    const [ user, setUser]= useState(null)

    const [loader , setLoader] = useState(true);
  const name = "potato alu  mia";
  
  const signinUser= (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password);
    setLoader(true)
  }
  const crateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth,email,password);
    setLoader(true)
  }


useEffect(()=>{
  const unsubscribe=   onAuthStateChanged(auth,currentUser=>{
        console.log("current User",currentUser);
        setUser(currentUser)
        setLoader(false)
        
    })
    return ()=>{
        unsubscribe
    }
},[])
const SignoutUser=()=>{
  setLoader(true)
return signOut(auth)

}

  const auntinfo = {
    name,loader,crateUser,signinUser,user,SignoutUser,SignInGoole
  };




  return (
    <Authcontext.Provider value={auntinfo}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;

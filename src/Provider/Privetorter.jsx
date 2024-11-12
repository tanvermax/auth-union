import { useContext } from "react";
import { Authcontext } from "./AuthProvider";
import { Navigate } from "react-router-dom";


const Privetorter = ({children}) => {
    const {user,loader }= useContext(Authcontext);

    if (loader) {
return <span className="loading loading-infinity loading-lg"></span>;
    }
    if ( user) {
        return children;
    }

    return (
        <Navigate to={"/login"}></Navigate>
    );
};

export default Privetorter;
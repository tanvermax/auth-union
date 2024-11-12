import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";
import { getAuth, signOut } from "firebase/auth";

const Navber = () => {
  const { name, user, SignoutUser } = useContext(Authcontext);

  console.log(name);

  const handleSingout = () => {
    SignoutUser()
      .then(() => {
        console.log("sign out succecfu;;y");
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
     
     {
      user  ? <>  <li>
      <NavLink to={"/product"}>Product</NavLink>
    </li>
    <li>
      <NavLink to={"/profile"}>Profile</NavLink>
    </li></> : <> <li>
      <NavLink to={"/login"}>Login </NavLink>
    </li>
    <li>
      <NavLink to={"/signin"}>Sign IN</NavLink>
    </li></>
     }
      {/* {user && (
        <>
          <li>
            <NavLink to={"/product"}>Product</NavLink>
          </li>
          <li>
            <NavLink to={"/profile"}>Profile</NavLink>
          </li>
        </>
      )} */}
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <a onClick={handleSingout} className="btn mr-4">
              Sign out
            </a>{" "}
            <a className="btn">{user?.email}</a>
          </>
        ) : (
          <Link to={"/login"}>Log in</Link>
        )}
      </div>
    </div>
  );
};

export default Navber;

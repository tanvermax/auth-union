
import { useContext } from "react";
import { auth } from "../firebase.init";

import { Link } from "react-router-dom";
import { Authcontext } from "../Provider/AuthProvider";

const Signin = () => {


  const {crateUser }= useContext(Authcontext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const nam = e.target.name.value;
    const password = e.target.password.value;

    console.log(email, nam, password);

    // sign in in new
    crateUser(email,password)
    .then(result=>{
      console.log(result.user);
      e.target.reset();
      
    })
    .catch(error=>{
      console.log("ERROR",error.message);
      
    })
   
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <p className="ml-4 mb-4">Already have an account? Please <Link to={"/login"}>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;

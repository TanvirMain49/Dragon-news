import React, { useContext, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { singInUser, forgetPass, setUser } = useContext(AuthContext);
  // State to manage errors during login
  const [error, setError] = useState({});

  // Hooks to access the current location and navigate between routes
  const location = useLocation();
  const navigator = useNavigate();

  const emailRef = useRef();
  const email = (emailRef?.current?.value);


   // Function to handle the login form submission
  const handleSingIn = (e) => {
    e.preventDefault();

    // Get the email and password values from the form
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    // Attempt to sign in the user
    singInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigator(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  const handleForgetPass = () =>{
    forgetPass(email)
    .then(()=>{}
    )
    .catch(error =>{

    })
  }
  return (
    <div className="min-h-screen flex justify-center items-center py-12">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
        <h1 className="font-bold text-center text-2xl pt-8">
          Login your account
        </h1>
        <div className="border-b-2 border-gray-200 mx-7 py-5"></div>
        <form onSubmit={handleSingIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              className="input input-bordered"
              required
            />
            <div>
              {error && (
                <p className="text-sm text-error font-semibold pt-3">
                  {error.login}
                </p>
              )}
            </div>
            <label className="label">
              <a onClick={handleForgetPass} href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Do not Have An Account ?{" "}
          <NavLink className="text-red-500" to="/auth/register">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;

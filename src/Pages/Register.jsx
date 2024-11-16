import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    // get data
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 2) {
      setError({ ...error, name: "Please enter at lest 4 character" });
      return;
    }
    const photoURL = form.get("photURL");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name, photoURL, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        const currentUser = result.user;
        setUser(currentUser);
        updateUserProfile({ displayName: name, photoURL: photoURL })
        .then(res =>{
          navigate('/')
        })
        .catch(err=>{
          console.log(err.code);
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center py-12">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 rounded-none">
        <h1 className="font-bold text-center text-2xl pt-8">
          Register your account
        </h1>
        <div className="border-b-2 border-gray-200 mx-7 py-5"></div>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
                <label className="label text-error font-semibold pt-0.5">
                  {error.name}
                </label>
              )}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Phot URL</span>
            </label>
            <input
              type="text"
              name="photURL"
              placeholder="Enter your Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
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
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label justify-start gap-2 pt-5 cursor-pointer">
              <input type="checkbox" defaultChecked className="checkbox" />
              <span className="label-text">Accept Term & Conditions</span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

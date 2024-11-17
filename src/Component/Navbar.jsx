import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userPng from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="logo font-bold text-blue-500 btn rounded-none">
        {user?.email}
      </div>
      <div className="space-x-6">
        <NavLink to="/" className='font-bold' >Home</NavLink>
        <NavLink to="/about" className='font-bold' >About</NavLink>
        <NavLink to="/career" className='font-bold' >Career</NavLink>
      </div>
      <div className="flex items-center gap-3">
        <div>
            {
                (user?.email || user?.displayName) ? <div>
                    <img className="w-12 mt-3 rounded-full border-2 p-2" src={user?.photoURL}/>
                    <p className="text-sm font-semibold text-blue-500">{user.displayName}</p>
                </div> : <img src={userPng} alt="" />
            }
          
        </div>
        {user && (user.email || user.displayName) ? (
          <button
            onClick={logOut}
            className="btn bg-black text-white rounded-none"
          >
            Log out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn bg-black text-white rounded-none"
          >
            Log in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

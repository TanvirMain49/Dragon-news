import React from 'react';
import { NavLink } from 'react-router-dom';
import userPng from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-8'>
            <div className="logo"></div>
            <div className="space-x-3">
                <NavLink to="/">Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="flex items-center gap-3">
                <div>
                    <img src={userPng} alt="" />
                </div>
                <button className='btn bg-black text-white rounded-none'>Log in</button>
            </div>
        </div>
    );
};

export default Navbar;
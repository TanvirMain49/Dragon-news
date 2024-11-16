import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-[#F3F3F3] font-poppins'>
            <div className='w-10/12 mx-auto pt-8'>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
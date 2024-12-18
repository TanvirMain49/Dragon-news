import React from 'react';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftNav from '../Component/LeftNav';
import RightNav from '../Component/RightNav';
import { Outlet, useLoaderData } from 'react-router-dom';

const HomeLayout = () => {
    const {data: latestNews} = useLoaderData();
    return (
        <div className='font-poppins'>
            {/* Header section */}
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews latestNews={latestNews}></LatestNews>
                </section>
            </header>

            {/* Navbar section */}
            <nav className="w-10/12 mx-auto py-8">
                <Navbar></Navbar>
            </nav>

            <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
                <aside className='col-span-3'><LeftNav></LeftNav></aside>
                <section className='col-span-6'><Outlet></Outlet></section>
                <aside className='col-span-3'><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;
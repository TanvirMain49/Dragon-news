import React from 'react';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftNav from '../Component/LeftNav';
import RightNav from '../Component/RightNav';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            {/* Header section */}
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section>
            </header>

            {/* Navbar section */}
            <nav className="w-10/12 mx-auto">
                <Navbar></Navbar>
            </nav>

            <main className="w-10/12 mx-auto grid grid-cols-12 gap-8">
                <aside className='col-span-3'><LeftNav></LeftNav></aside>
                <section className='col-span-6'>main section</section>
                <aside className='col-span-3'><RightNav></RightNav></aside>
            </main>
        </div>
    );
};

export default HomeLayout;
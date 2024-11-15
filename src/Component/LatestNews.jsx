import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-3 bg-base-300 p-3'>
            <p className='bg-[#D72050] text-white font-semibold p-2'>Latest</p>
            <Marquee pauseOnHover={true} className='bg-base-300 space-x-12'>
                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</Link>

                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</Link>

                <Link to='/news'>Match Highlights: Germany vs Spain — as it happened   !   </Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
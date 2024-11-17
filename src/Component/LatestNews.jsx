import React, { useContext } from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = ({latestNews}) => {
    return (
        <div className='flex gap-3 bg-base-300 p-3'>
            <p className='bg-[#D72050] text-white font-semibold p-2'>Latest</p>
            <Marquee speed={150} pauseOnHover={true} className='bg-base-300 space-x-12'>
                {
                    latestNews.map(news => <Link className='mr-6 font-bold' key={news._id} to={`/news/${news._id}`}>{news.title}...</Link>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;

import React from 'react';
import classPng from "../assets/class.png";
import playGround from "../assets/playground.png";
import swimming from "../assets/swimming.png";

const Zone = () => {
    return (
        <div className='my-10 pt-3 bg-base-200'>
            <h1 className='font-semibold pb-8 pl-4'>Q-Zone</h1>
            <div className='flex flex-col gap-4 justify-center items-center pb-10'>
                <img src={classPng} alt="" />
                <img src={playGround} alt="" />
                <img src={swimming} alt="" />
            </div>
        </div>
    );
};

export default Zone;
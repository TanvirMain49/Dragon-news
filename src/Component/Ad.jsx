import adImg from '../assets/bg.png'

const Ad = () => {
    return (
        <div className='relative'>
            <img className='w-full' src={adImg} alt="" />
            <h1 className='text-white font-bold absolute top-[50%] right-[45%]'>No Ads</h1>
        </div>
    );
};

export default Ad;
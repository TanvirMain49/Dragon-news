import React from 'react';
import { BsGithub, BsGoogle } from 'react-icons/bs';

const SocialJoin = () => {
    return (
        <div>
            <h1 className='font-bold pb-4'>Login With</h1>
            <div className='flex flex-col *:w-full space-y-2'>
                <div className="btn"><BsGoogle></BsGoogle> Login with Google</div>
                <div className="btn"><BsGithub></BsGithub> Login with Github</div>
            </div>
        </div>
    );
};

export default SocialJoin;
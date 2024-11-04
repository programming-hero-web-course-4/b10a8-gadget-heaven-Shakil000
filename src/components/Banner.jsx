import React from 'react';
import banner from '../assets/banner.jpg'

const Banner = () => {
    return (
            <div className='-mt-40'>
                <img className='h-96 w-7/12 mx-auto border border-white p-3 rounded relative' src={banner} alt="" />
            </div>
    );
};

export default Banner;
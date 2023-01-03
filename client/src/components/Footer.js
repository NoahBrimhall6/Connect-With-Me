import React from 'react';
import ItemsContainer from './Footer/ItemsContainer';
import SocialIcons from './Footer/SocialIcons';
import { Icons } from './Footer/Menus';

export default function Footer() {
    return (
        <footer className='bg-gray-800 text-white'>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-400'>Connect</span> With Me</h1>
            </div>
            <ItemsContainer />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
                <span>© 2023 Connect With Me.</span>
                <span><a href='/terms' className='hover:underline hover:bg-gray-900 hover:cursor-pointer'>Terms · Conditions</a></span>
                < SocialIcons Icons={Icons}/>
            </div>
        </footer>  
    )
}

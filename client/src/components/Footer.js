import React from 'react';
import ItemsContainer from './Footer/ItemsContainer';
import SocialIcons from './Footer/SocialIcons';
import { Icons } from './Footer/Menus';

export default function Footer() {
    return (
        <footer className='bg-gray-800 text-white'>
            <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 py-7'>
                <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5'><span className='text-teal-400'>Connect</span> With Me</h1>
                <div>
                    <input type='text' placeholder='Enter Your Phone Number' className='text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none'/>
                    <button className='bg-teal-400 hover:bg-tea-500 duration-300 px-5 -y-2.5 rounded-md text-white md:w-auto w-full'>Request Code</button>
                </div>
            </div>
            <ItemsContainer />
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8'>
                <span>© 2023 Connect With Me. All rights reserved.</span>
                <span>Terms · Privacy Policy</span>
                < SocialIcons Icons={Icons}/>
            </div>
        </footer>  
    )
}

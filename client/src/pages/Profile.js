import React from 'react';
import Img from '../assets/images/blank-profile-pic.webp';

export default function Profile() {
    return (
        <div>
            {/* Header section for profile ??? ... need to figure out what we want to do here */}
            <div className='grid grid-cols-6 mt-10'>
                <header className='bg-gray-800 text-white p-5 rounded-md col-start-2 col-end-6 flex flex-col justify-center items-center'>
                    <h1 className='profileHeaders'>Michelle's Profile</h1>
                    {/* <div className='flex'> */}
                        <img className='rounded-lg mt-3 placeholderImage' src={Img} alt='profile picture holder'></img>
                    {/* </div> */}
                </header>
            </div>
            
            {/* Grid styling for profile section */}
            <div className='ml-8 mr-8 mb-8 grid grid-cols-4 grid-rows-6 text-white bg-gray-600 p-5 rounded-md gap-3 gridSection'>
                    <div className='profilePic bg-gray-900 rounded-md p-3 lg:col-start-1 lg:col-span-1 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-2 md:row-start-1 md:row-end-2 sm:row-start-1 sm:row-end-2 row-start-1 row-end-2 col-start-1 col-span-4'>
                        <h1 className='profileHeaders'>Name Here</h1>
                        <h3 className='mt-2'>My Title -- Occupation</h3>
                    </div> 
                    <div className='aboutMe bg-gray-900 rounded-md p-3 lg:col-start-1 lg:col-span-1 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-4 lg:row-start-2 lg:row-end-7 md:row-start-2 md:row-end-7 sm:row-start-2 sm:row-end-3 row-start-2 row-end-3 col-start-1 col-span-4'>
                        <h1 className='profileHeaders'>About</h1>
                        <p className='mt-2'>Bio -- all about me </p>
                    </div>  

                    <div className='skillsEducation bg-gray-900 rounded-md p-3 lg:col-start-2 lg:col-span-3 md:col-start-3 md:col-span-2 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-3 md:row-start-1 md:row-end-3 sm:row-start-3 sm:row-end-4 row-start-3 row-end-4 col-start-1 col-span-4'>
                        <h1 className='profileHeaders'>Skills and Education</h1>
                        <p className='mt-2'>All of my skills and stuff</p>
                    </div>
                    <div className='resume bg-gray-900 rounded-md p-3 lg:col-start-2 lg:col-span-3 md:col-start-3 md:col-span-2 sm:col-start-1 sm:col-span-4 lg:row-start-3 lg:row-end-7 md:row-start-3 md:row-end-7 sm:row-start-4 sm:row-end-7 row-start-4 row-end-7 col-start-1 col-span-4'>
                        <h1 className='profileHeaders'>Resume</h1>
                        <p className='mt-2'>Resume goes here</p>
                    </div>
            </div> 
        </div>  
    )
}

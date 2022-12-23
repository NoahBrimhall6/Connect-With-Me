import React from 'react';
import Img from '../assets/images/blank-profile-pic.webp';

export default function Profile() {
    return (
        <div>
            {/* Header section for profile ??? ... need to figure out what we want to do here */}
            <div className='grid grid-cols-6 mt-10'>
                <header className='bg-gray-800 text-white p-8 rounded-lg col-start-2 col-end-6 grid grid-cols-6 gap-8'>
                    <div className='lg:col-start-1 lg:col-end-2 md:col-start-2 md:col-end-6 sm:col-start-2 sm:col-end-6 col-start-2 col-end-6'>
                        {/* <img className='rounded-lg my-3 placeholderImage' src={Img} alt='profile picture holder'></img> */}
                        <h1 className='bold text-lg text-black mt-3 text-center rounded-lg bg-gray-200 py-5 my-3'>Banana Yomamma</h1>
                        <h3 className='text-white text-center'>Banana Grower</h3>
                    </div>

                    <div className='lg:col-start-2 lg:col-end-7 lg:row-start-1 lg:row-end-2 mt-3 bg-gray-600 rounded-md p-4 md:col-start-1 md:-col-end-7 sm:col-start-1 sm:col-end-7 col-start-1 col-end-7'>
                        <h3 className='profileHeaders text-center'>About</h3>
                        <p className='mx-10 my-5'>About me Section About me SectionAbout me SectionAbout me SectionAbout me Section About me Section About me Section About me Section</p>
                    </div>
                    
                </header>
            </div>
            
            {/* Grid styling for profile section */}
            <div className='ml-8 mr-8 mb-8 grid grid-cols-4 grid-rows-6 text-white bg-gray-600 p-5 rounded-md gap-3 gridSection'>
                    <div className='myPosts bg-gray-900 rounded-md p-3 lg:col-start-1 lg:col-span-1 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-7 md:row-start-1 md:row-end-7 sm:row-start-1 sm:row-end-3 row-start-1 row-end-3 col-start-1 col-span-4'>
                        <h1 className='profileHeaders'>My Posts</h1>

                        {/* Start of inidividual post here */}
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md my-3">
                        <div className="flex flex-col items-center pb-5 pt-5">
                            <h5 className="mb-1 text-xl font-medium text-gray-900">Post Title</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Preview of post content</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-400 dark:focus:ring-gray-700">View Post</a>
                            </div>
                        </div>                        
                    </div>
                    {/* end of individual post here */}

                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md my-3">
                        <div className="flex flex-col items-center pb-5 pt-5">
                            <h5 className="mb-1 text-xl font-medium text-gray-900">Post Title</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Preview of post content</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-400 dark:focus:ring-gray-700">View Post</a>
                            </div>
                        </div>                        
                    </div>
                    
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

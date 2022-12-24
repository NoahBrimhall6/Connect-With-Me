import React from 'react';
import Img from '../assets/images/blank-profile-pic.webp';

export default function Profile() {
    return (
        <div>
            {/* Header section for profile ??? ... need to figure out what we want to do here */}
            <div className='grid grid-cols-6 mt-10'>
                <header className='bg-gray-900 text-white p-8 rounded-lg col-start-2 col-end-6 grid grid-cols-6 gap-8'>
                    <div className='lg:col-start-2 lg:col-end-6 md:col-start-2 md:col-end-6 sm:col-start-2 sm:col-end-6 col-start-2 col-end-6 flex justify-center items-center'>
                        <div>
                            {/* logic needed to UPLOAD IMAGE */}
                            <img className='rounded-lg my-3 placeholderImage' src={Img} alt='profile picture holder'></img>
                            {/* <h1 className='bold text-lg text-black mt-3 text-center rounded-lg bg-gray-200 py-5 my-3'>Banana Yomamma</h1> */}
                            <h3 className='text-white text-center'>Banana Grower</h3>
                        </div>
                        
                    </div>

                    <div className='lg:col-start-1 lg:col-end-7 lg:row-start-2 lg:row-end-3 mt-3 bg-white rounded-md p-4 md:col-start-1 md:-col-end-7 sm:col-start-1 sm:col-end-7 col-start-1 col-end-7'>
                        <h3 className='profileHeaders text-center text-black'>About</h3>
                        <p className='mx-10 my-5 text-black'>About me Section About me SectionAbout me SectionAbout me SectionAbout me Section About me Section About me Section About me Section</p>
                    </div>
                    
                </header>
            </div>
            
            {/* Grid styling for profile section */}
            <div className='xl:mx-20 lg:mx-10 md:mx-5 sm:mx-5 mx-5 my-10 grid grid-cols-4 grid-rows-6 text-white p-5 rounded-md gap-5 gridSection'>
                    <div className='myPosts bg-gray-900 rounded-md p-4 lg:col-start-4 lg:col-span-1 md:col-start-4 md:col-span-1 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-7 md:row-start-1 md:row-end-7 sm:row-start-5 sm:row-end-7 row-start-5 row-end-7 col-start-1 col-span-4 flex flex-col items-center'>
                        <h1 className='profileHeaders'>My Posts</h1>

                        {/* Start of inidividual post here */}
                        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
                        <div className="flex flex-col items-center pb-5 pt-5">
                            <h5 className="text-xl font-medium text-gray-900 text-center">Post Title</h5>
                            <span className="text-sm text-gray-400 text-center">Preview of post content</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700">View Post</a>
                            </div>
                            </div>                        
                        </div>
                    {/* end of individual post here */}

                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md m-2 p-2">
                        <div className="flex flex-col items-center pb-5 pt-5">
                            <h5 className="text-xl font-medium text-gray-900 text-center">Post Title</h5>
                            <span className="text-sm text-gray-400 text-center">Preview of post content</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center border rounded-lg focus:outline-none bg-gray-200 text-gray-800 border-gray-600 hover:bg-gray-300 hover:border-gray-400 focus:ring-gray-700">View Post</a>
                            </div>
                        </div>                        
                    </div>


                    
                    </div>  

                    <div className='skillsEducation bg-gray-900 rounded-md p-4 lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-3 md:row-start-1 md:row-end-3 sm:row-start-1 sm:row-end-2 row-start-3 row-end-4 col-start-1 col-span-4'>
                        <h1 className='profileHeaders'>Skills and Education</h1>
                        <p className='mt-2'>All of my skills and stuff</p>
                    </div>
                    <div className='resume bg-gray-900 rounded-md p-4 lg:col-start-1 lg:col-span-3 md:col-start-1 md:col-span-3 sm:col-start-1 sm:col-span-4 lg:row-start-3 lg:row-end-7 md:row-start-3 md:row-end-7 sm:row-start-2 sm:row-end-5 row-start-2 row-end-5 col-start-1 col-span-4'>
                        <h1 className='profileHeaders'>Resume</h1>
                        <p className='mt-2'>Resume goes here</p>
                    </div>
            </div> 
        </div>  
    )
}

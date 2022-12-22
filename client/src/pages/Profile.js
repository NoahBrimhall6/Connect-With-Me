import React from 'react';

export default function Profile() {
    return (
        <div>
            <header>

            </header>

            <div className='m-8 grid grid-cols-4 grid-rows-6 text-white bg-gray-600 p-5 rounded-md gap-3'>
                    <div className='profilePic bg-gray-900 rounded-md p-3 lg:col-start-1 lg:col-span-1 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-2 md:row-start-1 md:row-end-2 sm:row-start-1 sm:row-end-2'>
                        <h1>Name Here</h1>
                        <h3>My Title -- Occupation</h3>
                    </div> 
                    <div className='aboutMe bg-gray-900 rounded-md p-3 lg:col-start-1 lg:col-span-1 md:col-start-1 md:col-span-2 sm:col-start-1 sm:col-span-4 lg:row-start-2 lg:row-end-6 md:row-start-2 md:row-end-6 sm:row-start-2 sm:row-end-3'>
                        <p>Bio -- all about me </p>
                    </div>  

                    <div className='skillsEducation bg-gray-900 rounded-md p-3 lg:col-start-2 lg:col-span-3 md:col-start-3 md:col-span-2 sm:col-start-1 sm:col-span-4 lg:row-start-1 lg:row-end-3 md:row-start-1 md:row-end-4 sm:row-start-3 sm:row-end-4'>
                        <h1>Skills and Education</h1>
                        <p>All of my skills and stuff</p>
                    </div>
                    <div className='resume bg-gray-900 rounded-md p-3 lg:col-start-2 lg:col-span-3 md:col-start-3 md:col-span-2 sm:col-start-1 sm:col-span-4 lg:row-start-3 lg:row-end-6 md:row-start-4 md:row-end-6 sm:row-start-4 sm:row-end-6'>
                        <h1>Resume</h1>
                        <p>Resume goes here</p>
                    </div>
            </div> 
        </div>  
    )
}

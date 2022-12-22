import React from 'react';

export default function Profile() {
    return (
        <div>
            <header>

            </header>

            <div className='flex justify-center m-8'>
                <section className='profile grid grid-rows-2 gap-x-2 gap-y-2 m-5 bg-blue-900'>
                    <div className='profilePic grid grid-col-8 col-span-5'>
                        <h1>Profile</h1>
                    </div> 
                    <div className='aboutMe grid grid-col-8 '>
                        <p>Lots of fun stuff about me yay!</p>
                    </div>  
                </section>

                
                <section className='resumeSection grid grid-rows-2 m-5'>
                    <div className='sillsEducation'>
                        <h1>Skills and Education</h1>
                        <p>All of my skills and stuff</p>
                    </div>
                    <div className='resume'>
                        <h1>Resume</h1>
                        <p>Resume goes here</p>
                    </div>
                </section>
            </div>
            

            
        </div>  
    )
}

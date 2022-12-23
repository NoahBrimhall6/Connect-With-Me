import React from 'react';
import { useQuery } from '@apollo/client';
import Placeholder from '../assets/images/blackimage.jpeg';

export default function Home() {
    return (
        <>
            <header className='lg:my-10 lg:mx-60 md:my-10 md:mx-40 sm:my-10 sm:mx-40 my-10 mx-20 rounded-md p-4 grid grid-cols-6 bg-gray-600'>
                {/* What do we want to include on the post prompts???  */}
                <div className='lg:mt-5 lg:ml-5 lg:mr-2 lg:col-start-1 lg:col-end-3 md:col-start-1 md:col-end-7 md:flex md:flex-col sm:flex sm:col-start-1 sm:col-end-7 sm:flex-col flex flex-col col-start-1 col-end-7'>
                    <img className='lg:mr-2 rounded-md postImage md:justify-center md:items-center sm:justify-center sm:items-center justify-center items-center' src={Placeholder} alt='profile placeholder'></img>
                    <h1 className='text-center mt-3 text-white profileHeaders'>Name Goes Here</h1>
                    <h3 className='text-center text-white md:mb-1'>Occupation</h3>
                </div>
                <div className=" lg:mb-5 lg:mr-5 md:col-start-1 md:col-end-7 lg:col-start-3 lg:col-end-7 p-4 bg-gray-300 rounded-md lg:ml-2 sm:col-start-1 sm:col-end-7 sm:mt-5 col-start-1 col-end-7 mt-3">
                    <label for="default-input" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black ml-1">Create a post</label>
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <button className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mt-2 ml-1' type='button'>Post</button>
                </div>
            </header>
            <div className='mx-20 my-10 grid grid-cols-8 grid-rows-6 gap-3 bg-gray-600 rounded-md text-white p-4 gridFeed'>
                <div className='bg-gray-900 rounded-lg p-4 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-7 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:row-end-7 col-start-1 col-end-9 row-start-1 row-end-4'>
                    <h1 className='profileHeaders mt-3 text-center'>Feed</h1>

                    {/* Start of feed post template */}
                    <div className="flex justify-center mt-5">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-100 shadow-lg">
                        <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Title of Post Here</h5>
                        <p className="text-gray-700 text-base mb-4">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">Author</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2">Date</span>
                        </div>

                        <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                            {/* Make this responsive with current likes and comments!!! */}
                            <div className='flex flex-row justify-between mx-5'>
                                <p className='text-black text-xs'>123 Likes</p>
                                {/* create comment section */}
                                <a href='#' className='text-black hover:underline text-xs'>63 Comments</a>
                            </div>

                        <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                        <div className="px-6 py-4 flex justify-between">
                            <div>
                                <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">Comment</button>
                            </div>
                            
                            <div>
                                <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded-full mx-1"><ion-icon name="thumbs-up"></ion-icon></button>
                                
                                <button className="bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full mx-1"><ion-icon name="heart"></ion-icon></button>

                                <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-3 rounded-full mx-1"><ion-icon name="star"></ion-icon></button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End of feed post template */}


                    {/* Start of feed post template number 2*/}
                    <div className="flex justify-center mt-5">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-gray-100 shadow-lg">
                        <div className="p-6 flex flex-col justify-start">
                            <div className='flex justify-between'>
                                <div className=''>
                                    <h5 className="text-gray-900 text-xl font-medium mb-1">Jose Jenkins</h5>
                                    <h6 className="text-gray-500 text-sm font-medium mb-1">Secret FBI Agent</h6>
                                </div>
                                {/* Make a responsive date change !!! */}
                                <div className='mr-2'>
                                    <h6 className="text-gray-500 text-xs font-medium mb-2">11/12/2022</h6>
                                </div>
                            </div>
                        

                        <p className="text-gray-700 text-base mb-4">
                            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                        </p>

                        <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                            {/* Make this responsive with current likes and comments!!! */}
                            <div className='flex flex-row justify-between mx-5'>
                                <p className='text-black text-xs'>93 Likes</p>
                                {/* create comment section how to reference that post?? */}
                                <a href='/comments/:postid' className='text-black hover:underline text-xs'>63 Comments</a>
                            </div>
                        
                        {/* Hidden elements -- need to figure out styling here ADD HIDDEN CLASS !!!! */}
                        <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                            <div className='bg-gray-500 rounded-lg p-3'>
                                <h3 className='text-white mx-2'>Comments</h3>
                                {/* Start of a comment template */}
                                <div className='bg-gray-300 rounded-lg p-3 m-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h5 className='text-black text-sm'>Joey Jojo</h5>
                                            <h6 className='text-gray-700 text-xs mb-2'>Interior Designer</h6>
                                            <p className='text-black text-xs'>Wow hello this is really cool. Let's connect and get together. I am really interested in what you said in this post!</p>
                                        </div>
                                        
                                        <div className='mr-2'>
                                            <p className='text-gray-500 text-xs mt-2'>6/12/2022</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End of comment template */}

                                {/* Start of a comment template */}
                                <div className='bg-gray-300 rounded-lg p-3 m-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h5 className='text-black text-sm'>Joey Jojo</h5>
                                            <h6 className='text-gray-700 text-xs mb-2'>Interior Designer</h6>
                                            <p className='text-black text-xs'>Wow hello this is really cool. Let's connect and get together. I am really interested in what you said in this post!</p>
                                        </div>
                                        
                                        <div className='mr-2'>
                                            <p className='text-gray-500 text-xs mt-2'>6/12/2022</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End of comment template */}

                                {/* Start of a comment template */}
                                <div className='bg-gray-300 rounded-lg p-3 m-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h5 className='text-black text-sm'>Joey Jojo</h5>
                                            <h6 className='text-gray-700 text-xs mb-2'>Interior Designer</h6>
                                            <p className='text-black text-xs'>Wow hello this is really cool. Let's connect and get together. I am really interested in what you said in this post!</p>
                                        </div>
                                        
                                        <div className='mr-2'>
                                            <p className='text-gray-500 text-xs mt-2'>6/12/2022</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End of comment template */}

                                {/* Start of a comment template */}
                                <div className='bg-gray-300 rounded-lg p-3 m-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h5 className='text-black text-sm'>Joey Jojo</h5>
                                            <h6 className='text-gray-700 text-xs mb-2'>Interior Designer</h6>
                                            <p className='text-black text-xs'>Wow hello this is really cool. Let's connect and get together. I am really interested in what you said in this post!</p>
                                        </div>
                                        
                                        <div className='mr-2'>
                                            <p className='text-gray-500 text-xs mt-2'>6/12/2022</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End of comment template */}

                                {/* Start of a comment template */}
                                <div className='bg-gray-300 rounded-lg p-3 m-2'>
                                    <div className='flex justify-between'>
                                        <div>
                                            <h5 className='text-black text-sm'>Joey Jojo</h5>
                                            <h6 className='text-gray-700 text-xs mb-2'>Interior Designer</h6>
                                            <p className='text-black text-xs'>Wow hello this is really cool. Let's connect and get together. I am really interested in what you said in this post!</p>
                                        </div>
                                        
                                        <div className='mr-2'>
                                            <p className='text-gray-500 text-xs mt-2'>6/12/2022</p>
                                        </div>
                                    </div>
                                </div>
                                {/* End of comment template */}

                            </div>


                        <hr className="my-3 h-px bg-gray-200 border-0 dark:bg-gray-400"></hr>

                        <div className="px-6 py-4 flex justify-between">
                            <div>
                                <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg">Comment</button>
                            </div>
                            
                            <div>
                                <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded-full mx-1"><ion-icon name="thumbs-up"></ion-icon></button>
                                <button className="bg-red-600 hover:bg-gray-500 text-white py-2 px-3 rounded-full mx-1"><ion-icon name="thumbs-down"></ion-icon></button>
                                
                                <button className="bg-red-400 hover:bg-red-500 text-white py-2 px-3 rounded-full mx-1"><ion-icon name="heart"></ion-icon></button>

                                
                                

                                <button className="bg-yellow-400 hover:bg-yellow-500 text-white py-2 px-3 rounded-full mx-1"><ion-icon name="star"></ion-icon></button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* End of feed post template number 2 */}
                
                </div>
              
                <div className='bg-gray-900 rounded-lg p-4 lg:col-start-7 lg:col-end-9 lg:row-start-1 lg:row-end-7 md:col-start-6 md:col-end-9 md:row-start-1 md:row-end-7 sm:col-start-6 sm:col-end-9 sm:row-start-1 sm:row-end-7 col-start-1 col-end-9 row-start-4 row-end-7'>
                    <h1 className='profileHeaders m-2'>Connections</h1>

                    {/* start of connection card template -- will map through this? */}
                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-500 my-3">
                        <div className="flex flex-col items-center pb-5 pt-5">
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Jamie Jouliby</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Software Developer</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-400 dark:focus:ring-gray-700">Message</a>
                            </div>
                        </div>
                    </div>
                    {/* end of connection card template */}


                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-500 my-3">
                        <div className="flex flex-col items-center pb-5 pt-5">
                            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Sally Sue</h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">Designer</span>
                            <div className="flex mt-4 space-x-3 md:mt-6">
                                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-200 dark:text-gray-800 dark:border-gray-600 dark:hover:bg-gray-300 dark:hover:border-gray-400 dark:focus:ring-gray-700">Message</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

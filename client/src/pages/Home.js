import React from 'react';
import { useQuery } from '@apollo/client';
import Placeholder from '../assets/images/blank-profile-pic.webp';

export default function Home() {
    return (
        <>
            <header className='my-10 mx-60 rounded-md p-4 grid grid-cols-6 bg-gray-600'>
                <div className='col-start-1 col-end-3'>
                    <img src={Placeholder} alt='profile placeholder'></img>
                    <p className='text-white'>testing</p>
                </div>
                <div className="col-start-3 col-end-7 p-4 bg-gray-200 rounded-md">
                    <label for="default-input" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white ml-1">Make a post</label>
                    <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    <button className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2 ml-1' type='button'>Post</button>
                </div>
            </header>
            <div className='m-10 grid grid-cols-8 grid-rows-6 gap-3 bg-gray-600 rounded-md text-white p-4 gridFeed'>
                <div className='bg-gray-900 rounded-md p-4 lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:row-end-7 md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-7 sm:col-start-1 sm:col-end-6 sm:row-start-1 sm:row-end-7 col-start-1 col-end-9 row-start-1 row-end-4'>
                    <h1 className='profileHeaders'>Feed</h1>
                    <p>Feed content</p>
                </div>
                <div className='bg-gray-900 rounded-md p-4 lg:col-start-7 lg:col-end-9 lg:row-start-1 lg:row-end-7 md:col-start-6 md:col-end-9 md:row-start-1 md:row-end-7 sm:col-start-6 sm:col-end-9 sm:row-start-1 sm:row-end-7 col-start-1 col-end-9 row-start-4 row-end-7'>
                    <h1 className='profileHeaders'>Connections</h1>
                    <p>Connections listed here</p>
                </div>
            </div>
        </>
    )
}

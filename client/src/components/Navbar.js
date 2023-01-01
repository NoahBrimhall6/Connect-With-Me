import React from 'react';
import Logo from '../assets/images/cwm-logo.png';
import BlankProfile from '../assets/images/blank-profile-pic.webp';
import Auth from '../utils/auth';

import SearchBar from "./SearchBar";  //  Manamana Search
import { useQuery } from '@apollo/client';  // Manamana Search
import { QUERY_SEARCHUSERS } from '../utils/queries';  //  Manamana Search




export default function Navbar() {
    const {loading, data} = useQuery(QUERY_SEARCHUSERS);  //  Manamana Search
    var usersArray = [];
    if(!loading){usersArray = data.users;};  //  Manamana Search

  let location = window.location.pathname;

    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    }

    
    return (
      
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>

              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="block h-8 w-auto lg:hidden rounded-md" src={Logo} alt="connect with me logo" />
              <img className="hidden h-8 w-auto lg:block rounded-md" src={Logo} alt="connect with me logo" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="/" className={location === '/' ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"} aria-current="page">Home</a>

                <a href="/jobs" className={location === '/jobs' ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Jobs</a>

                <a href="/me" className={location === '/me' ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Profile</a>

                <a href="/resume" className={location === '/resume' ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"}>Resume</a>

                {/* need to create so when 'enter' is hit it will search to clean up the navbar with no button */}
                {/* CLASS for following div if we only want search on the jobs page: className={location === '/jobs' ? '' : 'hidden'} */}
                <div>
                  <input type='text' placeholder='Search' className=' text-gray-800 sm:w-30 h-9 w-full sm:mr-5 md:w-50 lg:w-72 mr-1 lg:mb-0 py-2.5 rounded px-2 focus:outline-none' />
                </div>
              </div>
            </div>
            <div> 
            <SearchBar placeholder="Search to connect" data={usersArray} />
            </div>
            <div> 
            <SearchBar placeholder="Search to connect" data={usersArray} />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  {/* need to update sign in and out !!! only show sign out when signed in and vice versa ... will update */}
                  {Auth.loggedIn() ? (
                    <a onClick={logout} className={location === '/signout' ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium ml-2" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ml-2"}>Sign Out</a>
                  ) : (<a href='/signin' className={location === '/signin' ? "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium mr-2" : "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium mr-2"}>Sign In</a>)
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

          <a href="/jobs" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Jobs</a>

          <a href="/profile" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</a>

          <a href="/resume" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Resume</a>
        </div>
      </div>
    </nav>
  )
};

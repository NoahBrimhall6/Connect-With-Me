import React from 'react';
import Michelle from '../../assets/images/michelle.png';
import Noah from '../../assets/images/noah.png';
import Rexx from '../../assets/images/rexx.png';
import Allen from '../../assets/images/allen.png';

const AboutUs = () => {
  return (
    <div>
      <h1 className='text-center text-2xl bold m-10 text-teal-600'>About Us</h1>
      <p className='text-center mx-12 xl:mx-40 lg:mx-40 md:mx-32 sm:mx-20 text-lg my-5'>Connect With Me is a social platform that connects individuals and helps them stay in touch with their friends and network. Our platform offers a variety of features, including:</p>
      <ul className='mx-24 xl:mx-40 lg:mx-40 md:mx-32 sm:mx-32 text-center'>
        <li className='my-5 mt-9'>A job board for creating and viewing job postings</li>
        <li className='my-5'>A resume builder tool to help you create a professional resume</li>
        <li className='my-5'>A personal profile page where you can share information</li>
        <li className='my-5 mb-9'>A messaging system for communicating with friends</li>
      </ul>
      <p className='mx-12 xl:mx-40 lg:mx-40 md:mx-32 sm:mx-20 text-lg text-center my-5'>Our goal is to make it easy for you to connect with others and stay connected, no matter where you are. Thank you for choosing Connect With Me!</p>

      <h1 className='text-center text-2xl bold mx-10 mt-12 text-teal-600'>Meet the Team</h1>
      <div className='flex justify-center'>
        <div>
        <img className='h-52 w-auto' alt='michelle' src={Michelle}></img>
          <h3 className='text-center mt-3 bold'>Michelle Hales</h3>
        </div>
      
      <div>
      <img className='h-52 w-auto' alt='noah' src={Noah}></img>
        <h3 className='text-center mt-3 bold'>Noah Brimhall</h3>
      </div>
      
      <div>
      <img className='h-52 w-auto' alt='rexx' src={Rexx}></img>
      <h3 className='text-center mt-3 bold'>Rexx Madsen</h3>
      </div>
      
      <div>
      <img className='h-52 w-auto' alt='allen' src={Allen}></img>
      <h3 className='text-center mt-3 bold'>Allen Robson</h3>
      </div>
      
      </div>
      
    </div>
  );
};

export default AboutUs;

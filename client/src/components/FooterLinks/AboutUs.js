import React from 'react';

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
    </div>
  );
};

export default AboutUs;

import React from 'react';

const Careers = () => {
  const jobs = [
    {
      title: 'Software Engineer',
      location: 'San Francisco, CA',
      description: 'We are seeking a highly skilled software engineer to join our team. The ideal candidate will have experience with modern web development frameworks and a strong understanding of computer science principles.',
    },
    {
      title: 'Product Manager',
      location: 'New York, NY',
      description: 'We are seeking a talented product manager to drive the development and launch of innovative new products. The ideal candidate will have a track record of successfully bringing products to market and a passion for solving customer problems.',
    },
    {
      title: 'Customer Support Representative',
      location: 'Chicago, IL',
      description: 'We are seeking a customer-focused individual to join our support team. The ideal candidate will have excellent communication skills and a dedication to providing exceptional customer service.',
    },
    {
      title: 'Graphic Designer',
      location: 'Los Angeles, CA',
      description: 'We are seeking a creative and talented graphic designer to join our marketing team. The ideal candidate will have a strong portfolio of design work and experience with Adobe Creative Suite.',
    },
    {
      title: 'Content Writer',
      location: 'Austin, TX',
      description: 'We are seeking a skilled writer to join our content team. The ideal candidate will have a strong command of the English language and experience creating engaging, informative content for the web.',
    },
  ];

  return (
    <div>
      <h1 className='text-center text-2xl bold my-10 text-teal-600'>Careers</h1>
      {jobs.map((job) => (
        <div className='mx-12 xl:mx-96 lg:mx-96 md:mx-64 sm:mx-28 text-center mb-5' key={job.title}>
          <h2 className='bold text-lg'>{job.title}</h2>
          <p><span className='bold'>Location: </span>{job.location}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Careers;

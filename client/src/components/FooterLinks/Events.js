import React from 'react';

const Events = () => {
  const events = [
    {
      name: 'Networking Event',
      date: 'January 20, 2023',
      location: 'New York, NY',
      description: 'Join us for a networking event and connect with other professionals in your industry.',
    },
    {
      name: 'Career Fair',
      date: 'March 15, 2023',
      location: 'Los Angeles, CA',
      description: 'Attend our career fair and meet with top employers looking for talented candidates like you.',
    },
    {
      name: 'Workshop Series',
      date: 'May 10-12, 2023',
      location: 'Chicago, IL',
      description: 'Join us for a three-day workshop series and learn valuable skills to help advance your career.',
    },
    {
      name: 'Annual Conference',
      date: 'July 25-27, 2023',
      location: 'Dallas, TX',
      description: "Don't miss our annual conference, featuring keynote speakers, breakout sessions, and networking opportunities.",
    },
    {
      name: 'Community Service Day',
      date: 'September 18, 2023',
      location: 'Seattle, WA',
      description: 'Join us for a day of community service and make a positive impact in your local area.',
    },
    {
      name: 'Holiday Party',
      date: 'December 3, 2023',
      location: 'Miami, FL',
      description: 'Celebrate the holiday season with us at our annual holiday party.',
    },
  ];

  return (
    <div>
      <h1 className='text-center text-2xl bold my-10 text-teal-600'>Events</h1>
      {events.map((event) => (
        <div className='text-center mx-12 xl:mx-96 lg:mx-96 md:mx-64 sm:mx-28' key={event.name}>
          <h2 className='bold mt-5 text-lg'>{event.name}</h2>
          <p><span className='bold'>Date: </span>{event.date}</p>
          <p><span className='bold'>Location: </span>{event.location}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;

import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // send a request to the server to send an email with the contact form data (not actually working yet)
    fetch('/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccess(true);
        }
      });
  };

  return (
    <div>
      <h1 className='text-center text-2xl bold my-10 text-teal-600'>Contact Us</h1>
      {success ? (
        <p className=''>Thank you for contacting us! We will get back to you as soon as possible.</p>
      ) : (
        <form className='bg-gray-900 xl:mx-52 lg:mx-52 md:mx-32 sm:mx-20 mx-12 rounded-lg p-4 text-white' onSubmit={handleSubmit}>
          <div className='flex flex-col mx-5 mt-2'>
          <label className='bold text-lg mb-1'>
            Name:
          </label>
            <input className='rounded-md w-full h-10 p-2' placeholder='John Hunter' type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          
          <br />

          <div className='flex flex-col mx-5'>
          <label className='bold text-lg mb-1'>
            Email:
          </label>
            <input  className='rounded-md w-full h-10 p-2' placeholder='johnhunter@gmail.com' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          
          <br />

          <div className='flex flex-col mx-5'>
          <label className='bold text-lg mb-1'>
            Message:
          </label>
            <textarea className='rounded-md w-full h-40 p-2' placeholder='Write your message here.' value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
         
          <br />
          <div className='text-center'>
          <button className='bg-teal-500 py-2 px-6 rounded-md mb-2' type="submit">Send</button>

          </div>
        </form>
      )}
    </div>
  );
};

export default ContactUs;

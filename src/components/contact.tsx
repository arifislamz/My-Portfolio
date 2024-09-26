"use client";

import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Error sending message.');
      }
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <section className="min-h-screen container flex items-center justify-center ">
      <div className="bg-gradient-to-r from-blue-900 via-slate-800 to-slate-900 text-white  p-8 rounded-lg shadow-lg max-w-md w-4/5">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-white flex flex-col justify-center   items-center">
          <div className='w-full'>
            <label htmlFor="name" className="block text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 w-full  border rounded bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 "
              placeholder='Enter Your Name...'
            />
          </div>
          <div className='w-full '>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 w-full border rounded bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 "
              placeholder='Enter Your Email...'
            />
          </div>
          <div className='w-full'>
            <label htmlFor="message" className="block text-sm font-medium">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="mt-1 p-2 pb-12 w-full border rounded bg-transparent focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 "
              placeholder='Write Your Message...'
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 md:w-2/4 "
          >
            Send Message
          </button>
        </form>
        <p className="text-center mt-4">{status}</p>
      </div>
    </section>
  );
};
export default ContactPage;

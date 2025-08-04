 import React from 'react';

function ContactSection() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 py-16 px-6 sm:px-16" id="contact">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Let’s Discuss Your Project</h2>
        <p className="text-gray-700 mb-8">
          Always available for freelancing if the right project comes along. Feel free to contact me.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Name *"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Email *"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Subject *"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Your message *"
              required
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactSection;

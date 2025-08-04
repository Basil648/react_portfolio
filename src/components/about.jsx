import React from 'react';

function AboutSection() {
  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-300 px-6 sm:px-16 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/*  Photo */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="./public/vite.svg"  
            alt="Bazil"
            className="w-80 h-auto object-cover shadow-lg"
          />
        </div>

        {/*  Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            I'm Bazil, a frontend developer with a passion for crafting visually appealing and user-friendly web interfaces.
            I enjoy turning complex problems into simple, beautiful, and intuitive designs. My journey in web development
            started with HTML and CSS and gradually expanded to JavaScript, React, Node.js, and more.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutSection;

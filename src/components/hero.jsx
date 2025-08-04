import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
    return (
        <div className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-br from-gray-100 to-gray-300 px-6 sm:px-16 py-12">

            {/* Left Side: Text */}
            <div className="w-full md:w-1/2 text-left">
                <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-2">
                    Hi, I'm{' '}
                    <span className="text-indigo-600">
                        <Typewriter
                            words={['Bazil Shajan']}
                            loop={1}
                            cursor
                            cursorStyle="|"
                            typeSpeed={100}
                            delaySpeed={500}
                        />
                    </span>
                </h1>

                <h2 className="text-2xl sm:text-4xl font-semibold text-gray-700 mb-6">
                    <Typewriter
                        words={['A Full Stack Developer']}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        delaySpeed={1500}
                    />
                </h2>

                <p className="text-lg sm:text-xl text-gray-700 mb-6">
                    A passionate  FullStack  Developer who loves building clean and interactive user experiences.
                </p>
                <a
                    href="#projects"
                    className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 hover:scale-105 transform transition duration-300 ease-in-out"
                >
                    View My Work
                </a>
            </div>

            {/*  Image */}
            <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
                <img
                    src="./public/vite.svg"
                    alt="Bazil"
                    className="w-80 h-auto object-cover shadow-xl border-4 border-indigo-600"
                />
            </div>

        </div>
    );
}

export default HeroSection;

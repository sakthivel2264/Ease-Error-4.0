import React from 'react'
import about from "./about.svg"
import { useState } from 'react';


const About = () => {

    const [rotate, setRotate] = useState(false);

    const toggleRotation = () => {
      setRotate(!rotate);
    };
  return (
    <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
      <div className='absolute -z-10 h-full w-full overflow-hidden'>
        <img src={about} className={`absolute object-cover w-full overflow-visible lg:w-70 ${rotate ? 'rotate-90' : ''}`} alt="Background Whirl"/>
      </div>
      <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
        <h3 className='text-4xl md:text-5xl font-bold'>No More Time Wasted!</h3>
        <div className="w-full grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
          {/* Render your info cards here */}
        </div>
      </div>
    </section>
  )
}

export default About

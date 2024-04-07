import React from 'react'
import aboutimg from "../assets/About.png"


const About = () => {
  return (
    <section className="h-fit min-h-screen w-full py-8 mt-6 gradient-bg-welcomes">
      <div>
        <h2 className='text-center text-5xl p-4 m-2 font-bold'>About</h2>
      <div className='flex flex-row m-3 justify-evenly mt-10'>
      <h3 className='text-3xl md:text-4xl font-bold text-center  max-w-[600px] indent-4 '><span className='text-5xl text-blue-500'>W</span>elcome to our revolutionary platform for transparent and accountable political fund management. Utilizing blockchain technology, we ensure secure and traceable contributions, fostering trust and integrity in political finance. Join us in reshaping democracy with transparency and accountability at its core</h3>
      <img src={aboutimg} alt='about-image' className="w-[500px] h-[400px]  shadow-md bg-gradient-radial rounded-lg "/>
      </div>
      
      </div>
    </section>
  )
}

export default About

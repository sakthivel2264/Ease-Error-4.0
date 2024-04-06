import React from 'react'
import About from "../assets/About.png"


const About = () => {
  return (
    <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8">
      <div className="w-full h-full flex items-center justify-content-around  flex-row gap-8 max-w-7xl">
        <h3 className='text-4xl md:text-5xl font-bold'>Welcome to our revolutionary platform for transparent and accountable political fund management. Utilizing blockchain technology, we ensure secure and traceable contributions, fostering trust and integrity in political finance. Join us in reshaping democracy with transparency and accountability at its core</h3>
       <img src={About} alt='about-image'/>
      </div>
    </section>
  )
}

export default About

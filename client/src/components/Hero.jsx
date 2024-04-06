import React from 'react'
import hero from "../assets/hero.png"
import { ConnectWallet } from "@thirdweb-dev/react";

const Hero = () => {
  return (
    <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden pl-32">
      <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
        <div className='flex flex-col gap-2'>
          <h1 className='text- font-black md:text-8xl '>E² Bond</h1>
          <h2 className='text-md md:text-2xl text-center text-white/50'>Unlocking Transparency</h2>
        </div>
        <p className='max-w-md text-2xl md:text-xl text-zinc-200 capitalize text-center'>Empowering transparent political funding through blockchain. Join us in reshaping democracy with integrity and trust</p>
        <div className='w-full flex items-center justify-center md:justify-start gap-4'>
       
      <img src={hero} alt="Hero-img"  className='z-10 '/>
          <ConnectWallet/>
          <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors border' >Contact</button>
        </div>
      </div>

    
    </header>
  )
}

export default Hero
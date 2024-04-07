import React from 'react'


import { ConnectWallet } from "@thirdweb-dev/react";

const Hero = () => {
  return (
    <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-8xl items-center justify-center relative overflow-x-hidden ">
      
        <div className='flex flex-col gap-2 '>
         
          <h1 className=' font-black md:text-8xl '>E² Bond</h1>
          <h2 className='text-md md:text-2xl text-center text-white/50'>Unlocking Transparency</h2>
          
        <p className='max-w-lg text-2xl md:text-xl text-zinc-200 capitalize text-center '>Empowering transparent political funding through blockchain. Join us in reshaping democracy with integrity and trust</p>
        <div className='w-full flex items-center justify-center  gap-4'>
       
          <ConnectWallet/>
          <button className='w-48 h-12 text-sm sm:text-base rounded hover:bg-white hover:text-white hover:bg-opacity-5 transition-colors border' >Contact</button>
        </div>
      </div>
      

    </header>
  )
}

export default Hero
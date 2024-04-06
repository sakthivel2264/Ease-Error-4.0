import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Hero from './Components/Hero'
import Bonds from './Components/Bonds'
// import Parties from './Components/Parties'

const App = () => {
  return (
    <div className='flex min-h-screen h-fit flex-col items-center justify-center relative '>
      <Navbar/>
       <div className="gradient-bg-welcome w-full ">
        
        <Hero/>
        </div>
    <About/>
    <Bonds/>
    {/* <Parties/> */}
  </div>
  )
}

export default App
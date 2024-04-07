import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Footer from './components/Footer';
import RegisterForm from './auth/Register';
import About from "./components/About"
import Bonds from "./components/Bonds"
import { useAddress } from "@thirdweb-dev/react";
import Partyapp from "./components/party/partyapp"
const App = () => {
  const address = useAddress();
  return (
    <>
    <Router>
      <div className='flex min-h-screen h-fit flex-col  relative overflow-hidden '>
      <Navbar />
        <Routes>
        
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path='/party' element={<Partyapp/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
        </>
  );
}

export default App;

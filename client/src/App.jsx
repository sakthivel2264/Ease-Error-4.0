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
      <div className='flex min-h-screen h-fit flex-col items-center justify-center relative '>
        <Navbar />
        <div className="gradient-bg-welcome w-full ">
        </div>
        <Routes>
          <Route path="/" element={<Hero/>} />
          <Route path="/about" element={<About />} />
          <Route path="/bonds" element={<Bonds />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
        <Footer />
      </div>
    </Router>
    {address && (
          <div className="border bg-red-100 w-full h-[500px]">
            <div className="border bg-green-200">
              <h3>Party</h3>
             <Partyapp/>

            </div>
            {/* <ContactList /> */}
          </div>
        )}
    </>
  );
}

export default App;

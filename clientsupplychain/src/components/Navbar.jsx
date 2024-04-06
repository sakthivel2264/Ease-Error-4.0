import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='container'>
        <h6 className='logo'>E² Bond</h6>
        <ul className="nav-btn">
          <li><a href="#about">About</a></li>
          {/* <li><a href="#bonds">Bonds</a></li> */}
        </ul>
          <button className="register-btn">Withdraw</button>
          <button className="register-btn">MakeTransaction</button>
      </div>
    </div>
  );
}

export default Navbar;

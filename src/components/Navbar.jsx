import React from 'react'
import '../App.css'
import { useState } from 'react';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  return (
    <nav className='navbar'>
      <h1 className='navbar-logo'>My Website</h1>
      <button className='menu-button' onClick={toggleMenu}>&#9776;</button>

      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button className='close-button' onClick={toggleMenu}>&times;</button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

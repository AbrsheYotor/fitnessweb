import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  

  return (
    <div className='header' id="home">
      <img src={Logo}  alt="here is a logo"  className='logo'/>
       <div>
      <ul className='header-menu'>
      <li><a href='#home'>Home</a></li>
      <li ><a href='#programs'>Programs</a></li>
      <li ><a href='#reasons'>Why Us</a></li>
      <li ><a href='#plans'>Plans</a></li>
      <li ><a href='#testimonials'>Testimonials</a></li>
      <li ><a href='#join'>Join Now</a></li>
    </ul>
    </div>
    </div>
  )}

export default Header
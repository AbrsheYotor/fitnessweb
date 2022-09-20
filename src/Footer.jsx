import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
  import Logo from './download.png'

const Footer = () => {
  return (
    
    <div>
    <hr/>
    <div class="social-container">
    
  <div className='blur blur-ft'></div>
      <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
          <div className="foo">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
        </div>
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <div className='blur blur-fo'></div>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      </div>
  <img src={Logo} alt=""  className='onee'/>
  
</div>


 
  )
}

export default Footer
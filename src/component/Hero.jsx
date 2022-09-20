import React from 'react'
import './Hero.css'
import Header from './Header/Header'
import Heart from './heart.png'
import Herod from './hero_image.png'
import Heroback from './hero_image_back.png'
import Calory from './calories.png'
import {motion} from 'framer-motion'


const Hero = () => {
  const transition={type:'spring',duration:3}
  return (
    
    <div className='hero'>
      <div className="blur hero-blur"></div>
 <div className="hero-l">
    <Header/>
    <div className="the-best">
      <div></div>
      <span>The best fitness app ever!</span>
    </div>
 
 <div className="hero-text">
<div >
    <span className='stroke-text'>Shape</span><span>Your</span>
</div>

<div>
    <span>Ideal Body</span>
</div>
<div className='text'>
    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.  ullam quisquam minus tempora,
    Repudiandae .</span>
</div>
 </div>
 <div className="figures">
 <div >
  <span>+140</span>
  <span className="new">Expert Coachs</span>
  </div>
  <div >
  <span>+970</span>
  <span className="new">Clients</span>
  </div>
  <div >
  <span>+50</span>
  <span className="new">Fitness Center</span>
  </div>
  </div>
  <div className="hero-buttons ">
    <button className="btn">Get Started</button>
    <button className="btn">Learn More</button>
  </div>
  </div>
 <div className="hero-r">
  <button className="btn">
    Join Now
  </button>
  <motion.div
  initial={{right:"-1rem"}}
  whileInView={{right:"4rem"}}
  transition={transition}

  
  className="heart-rate">
    <img src={Heart} />
    <span>Heart Rate</span><span> 116 bpm</span>
</motion.div>
  
  <img src={Herod}  className="hero-image"/>
  <motion.img src={Heroback} 
  
  initial={{right:"11rem"}}
  whileInView={{right:"20rem"}}
  transition={transition} 
  className="hero-image-back"/>
  
  <motion.div className="calories"
  initial={{right:"37rem"}}
  whileInView={{right:"28rem"}}
  transition={transition}
  >
   
    <img src={Calory}  />
    
    
    <div >
    <span className='hello'>Calories Burned</span>
    <span>220 kcal</span>
  </div>
  </motion.div>
  </div>
  
  </div>
 



    
  )
}

export default Hero
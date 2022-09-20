import React from 'react'
import './Testimonials.css'
import {testimonialsData} from './testimonialsData'
import { useState } from 'react'
import leftArrow from './leftArrow.png'
import rightArrow from './rightArrow.png'
import {motion} from'framer-motion'

const Testimonials = () => {
    const [selected,setSelected]=useState(0)
    const tlength=testimonialsData.length
    const transition={type:'spring',duration:3}
  return (
 <div className="Testimonials" id='testimonials'>
    <div className="left-t">
        <span className='cd'>Testimonials</span>
        <span className='stroke-text ef'>What They</span>
        <span className='ef'>Say About Us?</span>
            <motion.span
            key={selected}
            initial={{opacity:0,x:-100}}
            animate={{opacity:1,x:0}}
            exit={{opacity:0,x:100}}
            transition={transition}
            
            >{testimonialsData[selected].review}</motion.span>
            <span>
                <span style={{color:'var(--orange)'}}>
                    {testimonialsData[selected].name}
                    </span>{''}
                    --{testimonialsData[selected].status}
            </span>
    </div>
    <div className="right-t">
        <motion.div 
        initial={{opacity:0,x:-100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
        initial={{opacity:0,x:100}}
        transition={{...transition,duration:2}}
        whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.img 
        key={selected}
        initial={{opacity:0,x:100}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0,x:-100}}
        transition={transition}
        src={testimonialsData[selected].image} />
        <div className="arrows">
            <img 
            onClick={()=>
            selected===0?setSelected(tlength-1):setSelected((prev)=>prev-1)
             }
        src={leftArrow} alt="" />
            <img 
            onClick={()=>
            selected===tlength-1?setSelected(0):setSelected((prev)=>prev-1)
        }

            src={rightArrow} alt="" />
        </div>
    </div>
 </div>
  )
}

export default Testimonials
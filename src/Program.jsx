import React from 'react'
import './Programs.css'
import Dumpel from './dumbell.png'
import Run from './runing.png'
import Flame from  './flame.svg'
import Health from './heartHealth.svg'

const Program = () => {
  return (
    <div className="programs" id="programs">
<div className="para">
  <div>
    <span className='stroke-text'><i>Explore Our</i></span>
    </div>
    <div>
  <span className='spinner'><i>Programs</i></span>
  </div>
  <div>
  <span className='stroke-text'><i>To Shape You</i></span>
  </div>
 </div>
 

 <div className="cards">
  <div className='pi'>
    <img src={Dumpel}/>
    <h3>Stength Training</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
      a ipsam eaque numquam corporis exercitationem sint fugit 
      dolores dolor, neque repudiandae architecto.</p>
      <div className='two'>
      <div>
      <span>Join Now</span>
      </div>
      <div>
       <span>&#8594;</span>
       </div>
       </div>
</div>
  <div className='pi'>
  <img src={Run} />
    <h3>Code Training</h3>
    <p className='pa'>Lorem ipsum dolor sit amet consectetur adipisicing elit
      a ipsam eaque numquam corporis exercitationem sint fugit 
      dolores dolor, neque repudiandae architecto</p>
      <div className='two'>
      <div>
      <span>Join Now</span>
      </div>
      <div>
       <span>&#8594;</span>
       </div>
       </div>
  </div>
  <div className='pi'>
  <img src={Flame} />
    <h3>Fat Burning</h3>
    <p className='pa'>Lorem ipsum dolor sit amet consectetur adipisicing elit
      a ipsam eaque numquam corporis exercitationem sint fugit 
      dolores dolor, neque repudiandae architecto</p>
      <div className='two'>
      <div>
      <span>Join Now</span>
      </div>
      <div>
       <span>&#8594;</span>
       </div>
       </div>
       </div>
       
  <div className='pi'>
  <img src={Health} />
    <h3>Health Fitness</h3>
    <p className='pa'>Lorem ipsum dolor sit amet consectetur adipisicing elit
      a ipsam eaque numquam corporis exercitationem sint fugit 
      dolores dolor, neque repudiandae architecto</p>
      <div className='two'>
      <div>
      <span>Join Now</span>
      </div>
      <div>
       <span>&#8594;</span>
       </div>
       </div>
  </div>
  </div>
</div>
  )
}

export default Program
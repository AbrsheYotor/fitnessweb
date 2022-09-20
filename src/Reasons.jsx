import React from 'react'
import './Reasons.css'
import Gym1 from './p1.png'
import Gym2 from './p2.jpg'
import Gym3 from './p3.png'
import Gym4 from './p4.png'
import Tick from './tick.png'
import Nb from'./nb.png'
import Adidas from'./adidas.png'
import Nike from'./nike.png'


const Reasons = () => {
  return (
   <div className="Reasons" id="reasons">
    <div className="left">
        <img src={Gym1} alt="" />
        <img src={Gym2} alt="" />
        <img src={Gym3} alt="" />
        <img src={Gym4} alt="" />
    </div>
    <div className="right">
        <span className="">Some Reasons</span>
        <div>
            <span className='stroke-text'>Why </span>
            <span>Choose Us?</span>
            </div>
            <div className='details'>
            <div>
                <img src={Tick}/>
                <span>Over 140 plus experts</span>
                </div>
                <div>
                <img src={Tick}/>
                <span>Train smarter and faster</span>
                </div>
                <div>
                <img src={Tick}/>
                
                <span>1 free program for new member</span>
                </div>
                <div>
                <img src={Tick}/>
                <span>Reliable Partner</span>
                </div>
                </div>
                <h4><span className='ab'>Our Parents</span></h4>
            <div className="partners">
                <img src={Nb} alt="" />
            <img src={Adidas} alt="" />
            <img src={Nike} alt="" />

            </div>


  
    </div>
   </div>
  )
}

export default Reasons
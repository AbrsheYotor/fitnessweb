import React from 'react'
import './Plans.css'
import plansData from './plansData.js'
import White from './whiteTick.png'

const Plans = () => {
  return (
    <div className="plans-container" id="plans">
       <div className="blur plans-bluro"></div>
       <div className="blur plans-blurt"></div>

        <div className="programs-header">
            <span className='stroke-text'> Ready Start</span>
            <span >Your Journey</span>
            <span className='stroke-text'>Now With Us</span>
            </div>
            <div className="planss">
         {plansData.map((plan,i)=>
         <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> $ {plan.price}</span>
            <div className="features">
                {plan.features.map((features,i) =>
                    <div className="feature">
                        <img src={White} alt="" />
                        < span key={i} >{features}</span>
                    </div>
                   
                   )}
                   <div>
                    <span>See more benefits &#8594;</span>
                    <button className="btn">Join now</button>
                   </div>
            </div>
         </div>
         )}
            
            </div>
        </div>
    
  )
}

export default Plans
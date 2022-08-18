import React from 'react';
import './style/userexperience.css'

const UserExperience = (props) => {
  return (
    <div className='user'>
    <div className='user-info'>
      <h3>User experience design</h3>
      <p>Even after Product Strategy phase, we maintain a relentless focus on your business goals.Our<br/>
      Product design team ensures the product we deliver we deliver solve your challenges while meeting your user's<br/>
      needs</p>
      <div>
      <h6>TACTICS</h6>
      <div className='Behavioral'>
        <p>Behavioral data analysis</p>
        <p>wireframe</p>
      </div>
      <div className='personalization'>
        <p>Personalization architecture</p>
        <p>User flow</p>
      </div>
      </div>
    </div>
    
    <div className='user-image'>
        <img src={props.userimage} alt='experience'/>
    </div>
    </div>
  )
}

export default UserExperience

import React from 'react'
import './style/designprocess.css'

const DesignProcess = (props) => {
  return (
    <div className='process'>
      <div className='process-info'>
      <h3>Our Design Process</h3>
      <p>Every decision we make is informed and goal oriented with the user journey in mind. Desining with a</p>
      </div>
      <div className='process-image'>
      <div className='research'>
        <img src={props.process2} alt='research'/>
        <h5>2.Research+project estimation</h5>
      </div>
      <div className='discovery-ux'>
        <div className='discovery'>
        <img src={props.process1} alt='discovery'/>
        <h5>1.discovery</h5>
        </div>
        <div className='ux'>
        <img src={props.process3} alt='ux'/>
        <h5>3.UX wireframes</h5>
        </div>
      </div>
      <div className='ui-application'>
      <img src={props.process4} alt='ui'/>
        <h5>4.UI application</h5>
      </div>
      </div>
    </div>
  )
}

export default DesignProcess;

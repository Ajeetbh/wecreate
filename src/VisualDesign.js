import React from 'react';
import './style/visualdesign.css';
const VisualDesign = (props) => {
  return (
    <div className='visual-design'>
        <div className='visual-design-image'>
            <img src={props.image1} alt='productimage'/>
        </div> 
      <div className='visual-design-info'>
      <h3>More than visual design, more than interactions.</h3>
      <p>We take pride in our craft. Drawing on our deep expertise in design, our Product <br/>
      Design team cares for your users experience over the entire customer journey at every <br/>
      touchpoint with your company.<br/><br/>
      We Shepher your product though the entire design process. We aim to achieve your<br/><br/>
      We also collaborate with our Software Engineering team to ensure ore designs are <br/>
      technically feasible within the constraints of the project . At the same time ,We are <br/>
      watching for innovative new technology that can make the experience more seamless.
      </p>
      </div>
    </div>
  )
}

export default VisualDesign;
import React from 'react';
import './style/productdesign.css';
import {Navigate} from 'react-router-dom';
const DesignProduct = (props) => {
  const [goToDesignProduct,setGoToDesignProduct]=React.useState(false);
   if(goToDesignProduct){
    return <Navigate to='/DesignProduct'/>
  }
  return (
    <div className='design'>
      <div className='design-info'>
      <h3 onclick={()=>{
      setGoToDesignProduct(true);
       }}>Product Design</h3>
      <p>Our multifaceted apps are custom built and developed to support to multiple<br/>
        plateform ,including both android and iOS, making apps accessible for all.
      </p>
      </div>
      <div className='design-image'>
        <img src={props.image} alt='productimage'/>
      </div>
    </div>
  )
}

export default DesignProduct;

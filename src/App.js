import './App.css';
import React from 'react';
import DesignProduct from './DesignProduct';
import DesignProductImage from './image/ProductDesign.png'

import VisualDesign from './VisualDesign';
import VisualDesignImage from './image/more-than-visual-design.png';

import DesignProcess from './DesignProcess';
import process2 from './image/research-and-project-estimation.svg'
import process1 from './image/discovery.svg';
import process3 from './image/wireframe.svg';
import process4 from './image/ui.svg';

import ProdcutServices from './ProdcutServices';

import UserExperience from './UserExperience';
import userImage from './image/user-experience-design.svg'

import DesignVisual from './DesignVisual';
import DesignVisualImage from './image/visual-design.svg';

import {Navigate} from 'react-router-dom'

function App() {
  const [goToDesignProduct,setGoToDesignProduct]=React.useState(false);
  if(goToDesignProduct){
    return <Navigate to='/DesignProduct'/>
  }
  return (
    <div className="App"> 
    <DesignProduct image={DesignProductImage} 
    onclick={()=>{
      setGoToDesignProduct(true);
    }}
    />
    <VisualDesign image1={VisualDesignImage}/>
    <DesignProcess process2={process2} process1={process1} process3={process3} process4={process4}/>
    <ProdcutServices/>
    <UserExperience userimage={userImage}/>
    <DesignVisual designImage={DesignVisualImage}/>
    </div>
  );
}

export default App;

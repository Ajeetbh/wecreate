import React from "react";
import "./style/designvisual.css";

const DesignVisual = (props) => {
  return (
    <div className="visual-design">
      <div className="visual-image">
        <img src={props.designImage} alt="image5" />
      </div>
      <div className="visual-info">
        <h3>Visual design</h3>
        <p>
          Yes, we make your software product beautiful. We also make it
          easy-to-use, compeling, and delightful.
        </p>
        <div>
          <h6>TACTICS</h6>
          <div className="design-workshop">
            <p>Design workshop</p>
            <p>Custom iconography</p>
          </div>
          <div className="visual-concept">
            <p>Visual design concept</p>
            <p>UI elements</p>
          </div>
          <div className="typography">
            <p>Typography System</p>
            <p>Style guide</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DesignVisual;

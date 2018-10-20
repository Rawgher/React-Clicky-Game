import React from "react";
import "./BackgroundArea.css";
import Background from './BackgroundImage/spiderman-logo.jpg';

const sectionStyle = {
  backgroundImage: `url(${Background})` 
}

const BackgroundArea = props => (

<div style={sectionStyle} className="sizing">{props.children}</div>
/* <div className="background">{props.children}</div> */
)

export default BackgroundArea;

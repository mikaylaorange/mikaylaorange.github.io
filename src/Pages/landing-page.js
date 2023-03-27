import React from 'react';
import {Button} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './landing-page.css';
export default function LandingPage() {
  let history = useHistory();

  let routeChange = ()=> {
    let path = `/about`;
    history.push(path);
  }
  const handleAboutClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#about"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <div className="header-intro">
      <div style={{alignItems: "center"}}>
      <h4>Hey there!</h4>
      <h1 className="name">I'm Mikayla Orange</h1>
      <p>
        I’m a senior computer science major at Howard University with a passion 
        for building technology that is accessible and useful to all and helping to create impactful 
        and innovative solutions to problems, big and small, around the world.
      </p>
      <Button 
        style={{fontFamily: 'Josefin Sans', textTransform: "capitalize", color: "rgb(217, 124, 80)", borderColor: "rgb(217, 124, 80)"}}
        variant="outlined" 
        className="button" 
        onClick={handleAboutClick}
      >
          Find out more
      </Button>
      </div>
    </div>
  )
}
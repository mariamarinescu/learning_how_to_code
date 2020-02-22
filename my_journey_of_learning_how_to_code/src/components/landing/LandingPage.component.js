import React from 'react';
import Particles from 'react-particles-js';
import OutlinedCard from '../landing-card/LandingCard.component';
import './LandingPage.component.sass';


const particleOpt = {
  particles: {
  number: {
    value:222, 
    density: {
      enable: true, 
      value_area: 800
    }
  }
    }, 
    interactivity: {
      events: {
          onhover: {
              enable: true,
              mode: "repulse"
          }
      }
    },
	    retina_detect: true
}

  

function LandingPage() {
  return (
<div className="landingPage">
<div id="particles">
  <Particles 
    params={particleOpt}
  /></div>
  <OutlinedCard/>
  </div>
 

  );
}

export default LandingPage;

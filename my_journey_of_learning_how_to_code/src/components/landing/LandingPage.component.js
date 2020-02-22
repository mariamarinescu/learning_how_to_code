import React from 'react';
import Particles from 'react-particles-js';


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
  }
  
}
function LandingPage() {
  return (

  <Particles 
    params={particleOpt}
  />


  );
}

export default LandingPage;

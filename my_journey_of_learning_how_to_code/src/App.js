import React from 'react';
import './App.sass';
import LandingPage from './components/landing/LandingPage.component';
import Particles from 'react-particles-js';
import { Switch, Route, HashRouter } from 'react-router-dom';


const particleOpt = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 900
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
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch >
          <Route exact path="/" >
            <LandingPage />
          </Route>
          <Route path="/about"> 
            
          </Route>

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

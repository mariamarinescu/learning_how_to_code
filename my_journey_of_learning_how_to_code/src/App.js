import React from 'react';
import './App.css';
import LandingPage from './components/landing/LandingPage.component';
import Particles from 'react-particles-js';
import { Switch, Route, HashRouter } from 'react-router-dom';
import ResponsiveDrawer from './components/responsive-drawer/ResponsiveDrawer.component';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch >
          <Route exact path="/" component={LandingPage}/>
        </Switch>
        <Switch>
        <Route exact path="/about" component={ResponsiveDrawer}/> 

        </Switch>
        </HashRouter>
    </div>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import Home from './pages/home/home'
import View from './pages/view/view'
import './App.css';

function App() {
  return (
    <Router>
    <div className='app'>
     
      <Switch>
        <Route path="/view">
          <View />
        </Route>
      
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>

    </div>
  </Router>
  );
}

export default App;

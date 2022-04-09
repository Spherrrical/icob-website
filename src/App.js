import './App.css';

import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/home'
import About from './pages/about'
import fetch from "node-fetch";



function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About }/>
        </Switch>
      </BrowserRouter>
  )
}



export default App;

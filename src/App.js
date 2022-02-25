import React, { useEffect, useState } from 'react';
import {Route, Link} from 'react-router-dom';

import './App.css';

import Home from './pages/home/home';
import NOBOTop from './pages/nobotop/nobotop';
import NOBOFront from './pages/nobofront/nobofront';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/nobotop" component={NOBOTop} />
      <Route exact path="/nobofront" component={NOBOFront} />
    </div>
  );
}

export default App;

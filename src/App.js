import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header/Header';
import Home from './Containers/Home/Home';
import About from './Containers/About/About';
import Contact from './Containers/Contact/Contact';
import Content from './Components/Content/Content';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Contact' component={Contact} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/Content' component={Content} />
      </div>
    </Router>
  );
}

export default App;

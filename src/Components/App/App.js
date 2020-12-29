import React, { Component } from 'react';
import '../../App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header'; 
import Socials from '../Socials/Socials'; 
import Skills from '../Skills/Skills'; 
import ProjectList from '../ProjectList/ProjectList'; 
import Landing from '../Landing/Landing';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Route  path='/'>
            <Landing/>
          </Route>
          <Route  path='/' component={Home} />
          <Route  path='/Skills' component={Skills} />
        </Router>
      </div>
    );
  }
}

export default App; 
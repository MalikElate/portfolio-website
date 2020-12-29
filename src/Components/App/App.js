import React, { Component } from 'react';
import '../../App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import { AnimatedRoute } from 'react-router-transition';
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
          <Route  exact path='/' component={Landing} />
          <AnimatedRoute
            path="/projects"
            component={Home}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
            })}
          />
          {/* <Route  path='/projects' component={Home} /> */}
          <Route  path='/skills' component={Skills} />
        </Router>
      </div>
    );
  }
}

export default App; 
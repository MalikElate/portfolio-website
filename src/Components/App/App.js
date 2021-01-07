import React, { Component } from 'react';
import '../../App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import { AnimatedRoute } from 'react-router-transition';
import About from '../About/About'; 
import Landing from '../Landing/Landing';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          {/* <Route  exact path='/' component={Landing} /> */}
          <AnimatedRoute
            exact path="/"
            component={Landing}
            atEnter={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
            })}
          />
          <AnimatedRoute
            path="/projects"
            component={Portfolio}
            atEnter={{ offset: -100 }}
            atLeave={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
            })}
          />
          {/* <Route  path='/projects' component={Home} /> */}
          <Route  path='/About' component={About} />
        </Router>
      </div>
    );
  }
}

export default App; 
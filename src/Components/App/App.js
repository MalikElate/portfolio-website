import React, { Component } from 'react';
import '../../App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import { AnimatedRoute } from 'react-router-transition';
import About from '../About/About'; 
import Landing from '../Landing/Landing';
import Header from '../Header/Header'; 

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
          <Route  exact path='/' component={() => <Header background={'transparent'}/>} />
          <AnimatedRoute
            path="/projects"
            component={Portfolio}
            atEnter={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
            })}
          />
          {/* <Route  path='/projects' component={Home} /> */}
          <Route  path='/projects' component={() => <Header background={'rgb(45, 35, 45)'}/>} />
          <AnimatedRoute
            path="/about"
            component={About}
            atEnter={{ offset: -100 }}
            atActive={{ offset: 0 }}
            mapStyles={(styles) => ({
            transform: `translateX(${styles.offset}%)`,
            })}
          />
          <Route  path='/about' component={() => <Header background={'rgb(45, 35, 45)'}/>} />
        </Router>
      </div>
    );
  }
}

export default App; 
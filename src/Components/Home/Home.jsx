import React, { Component } from 'react';
import Summary from '../Summary/Summary'; 
import Header from '../Header/Header'; 
import Socials from '../Socials/Socials'; 
import Skills from '../Skills/Skills'; 
import ProjectList from '../ProjectList/ProjectList'; 



class Home extends Component {
  render() {
    return (
      <div> 
        <Header/> 
        <Summary/>
        <ProjectList/>
        <Skills/>
        <Socials/>
      </div>
    );
  }
}

export default Home;

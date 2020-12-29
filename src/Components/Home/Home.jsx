import React, { Component } from 'react';
import Header from '../Header/Header'; 
import Socials from '../Socials/Socials'; 
import Skills from '../Skills/Skills'; 
import ProjectList from '../ProjectList/ProjectList'; 
import {
  AppBar, 
  Toolbar,
  Button, 
 } from '@material-ui/core';


class Home extends Component {
  render() {
    return (
      <div> 
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}> 
      <Toolbar>
          <Button></Button>
          <Button></Button>
          <Button></Button>
      </Toolbar>
      </AppBar> 
        <Header/> 
        <ProjectList/>
        <Skills/>
        <Socials/>
      </div>
    );
  }
}

export default Home;

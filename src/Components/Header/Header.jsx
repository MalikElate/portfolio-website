import React from "react";
// import TextTransition, { presets } from "react-text-transition";
import {
  AppBar, 
  Toolbar,
  Button, 
 } from '@material-ui/core';

const Header = () => {
//rgb(40, 30, 40)
  return (
    <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}> 
      <Toolbar>
          <Button onClick={()=>{ window.scrollTo(0,document.body.scrollHeight)}} style={{color: 'white'}}>Contact</Button>
          <Button style={{color: 'white'}}>Portfolio</Button>
          <Button style={{color: 'white'}}>Skills</Button>
      </Toolbar>
    </AppBar> 
  );
};


export default (Header)
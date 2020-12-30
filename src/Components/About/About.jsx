import React, { Component } from 'react';
import Header from '../Header/Header'; 
import Skills from '../Skills/Skills'; 
import Summary from '../Summary/Summary'; 
import {
  AppBar, 
  Toolbar,
  Button, 
  Box, 
  withStyles
 } from '@material-ui/core';

const styles = {
  TypographyH2:  {
    color: "rgb(40, 30, 40)",
    padding: "5%"
  }
};


class Portfolio extends Component {
  render() {
    const { classes } = this.props;
    return (
      <> 
      {/* this invisible app bar prevents the header from covering the contents of the page */}
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}> 
      <Toolbar>
          <Button></Button>
          <Button></Button>
          <Button></Button>
      </Toolbar>
      </AppBar>
      {/* ----------------------------------------------------------------------------------- */}
      <Header background={'rgb(45, 35, 45)'}/> 
      <Box boxShadow={3} style={{margin: "5%", padding: "5%", display: "inline-block"}}>
        <Summary/>
        <Skills/> 
      </Box>
      </>
    );
  }
}

export default withStyles(styles)(Portfolio);

import React, { Component } from 'react';
import Socials from '../Socials/Socials'; 
import ProjectList from '../ProjectList/ProjectList'; 
import {
  AppBar, 
  Toolbar,
  Button, 
  Typography, 
  withStyles
 } from '@material-ui/core';

const styles = {
  TypographyH2:  {
    color: "rgb(45, 35, 45)",
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
      {/* <Header background={'rgb(45, 35, 45)'}/>  */}
      <Typography className={classes.TypographyH2} variant="h2">Projects</Typography> 
      <ProjectList/>
      <Socials/>
      </>
    );
  }
}

export default withStyles(styles)(Portfolio);

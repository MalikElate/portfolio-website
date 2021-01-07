import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
// import TextTransition, { presets } from "react-text-transition";
import {
  AppBar, 
  Toolbar,
  Button, 
  withStyles, 
  Typography
 } from '@material-ui/core';

 const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: 'white'
  },
};


 class Header extends Component {
   render() { 
    const { classes } = this.props;
    return (
      <AppBar position="fixed" style={{ background: 'rgb(45, 35, 45)', boxShadow: 'none'}}> 
        <Toolbar> 
          <Typography align='left' className={classes.grow} style={{color: 'white'}}>
            <Button style={{color: 'white'}} onClick={() => { 
              this.props.history.push('/') 
            }}>Home</Button>
          </Typography>
          <Button onClick={()=>{ this.props.history.push('/') }} style={{color: 'white'}}>Contact</Button>
          <Button style={{color: 'white'}} onClick={() => {this.props.history.push('/projects') }}>Portfolio</Button>
          <Button style={{color: 'white'}} onClick={()=>{ this.props.history.push('/about')}}>About</Button>
        </Toolbar>
      </AppBar> 
    );
  }
};


export default withRouter(withStyles(styles)(Header)); 
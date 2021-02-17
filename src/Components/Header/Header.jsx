import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import {
  AppBar, 
  Toolbar,
  Button, 
  withStyles, 
  Typography, 
  Link
 } from '@material-ui/core';

 const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: 'white',
  },
  Link: { 
    color: 'white',
  }
};


 class Header extends Component {
   render() { 
    const { classes } = this.props; 
    let homeUnderline ='.MuiLink-underlineHover' ; 
    let aboutUnderline = '.MuiLink-underlineHover'; 
    let portfolioUnderline = '.MuiLink-underlineHover'; 
    let contactUnderline = '.MuiLink-underlineHover'; 
    // if (this.props.location.pathname === "/") { 
    //   homeUnderline = 'MuiLink-underlineAlways'
    // } else if (this.props.location.pathname === "/") { 
    //     portfolioUnderline = 'MuiLink-underlineAlways'
    // } else if (this.props.location.pathname === "/about") { 
    //     aboutUnderline = 'MuiLink-underlineAlways'
    // } else if (this.props.location.pathname === "/projects") { 
    //     portfolioUnderline = 'MuiLink-underlineAlways'
    // }
    return (
      <>
      <AppBar position="fixed" style={{ background: this.props.background, boxShadow: 'none'}}> 
        <Toolbar> 
          <Typography align='left' className={classes.grow} style={{color: 'white'}}>
            <Button style={{color: 'white'}} onClick={() => { 
              this.props.history.push('/') 
            }}> <Link style={{color: 'white'}} className={homeUnderline}>Home</Link></Button>
          </Typography>
          <Button onClick={()=>{ this.props.history.push('/') }} style={{color: 'white'}}>
            <Link style={{color: 'white'}} className={contactUnderline}>Contact</Link>
          </Button>

          <Button style={{color: 'white'}} onClick={() => {this.props.history.push('/projects') }}>
            <Link style={{color: 'white'}} className={portfolioUnderline}>Portfolio</Link>
          </Button>
          <Button style={{color: 'white'}} onClick={()=>{ this.props.history.push('/about')}}>
            <Link style={{color: 'white'}} className={aboutUnderline}>About</Link>
          </Button>
        </Toolbar>
      </AppBar> 
      </>
    );
  }
};


export default withRouter(withStyles(styles)(Header)); 
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import Subheader from '../Subheader/Subheader'; 
import { IoIosArrowForward } from 'react-icons/io';
import {
  Grid,
  Typography, 
  withStyles, 
  Button, 
 } from '@material-ui/core';

 const styles = {
  landingSubHeader:  {
    marginTop: '15%',
    padding: '0%',
    display: "block"
   }, 
   landingSubHeader2:  {
    marginTop: '15%',
    padding: '0%',
    display: "inline"
   }, 
   projectBtn: { 
     color: "white"
   }, 
   spaceDiv: { 

   }
 };

class Home extends Component { 

  viewProjects = () => { 
        this.props.history.push('/projects');
  }

  render() {
    const { classes } = this.props;
    return (  
      <>
        <Grid className="App-header"
          item
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
          style={{ padding: 20, backgroundImage: "url('./images/image100.png')", }}
        > 
          <Typography className={classes.landingSubHeader} variant="h1">Malik Elate</Typography> 
          <Typography variant="h6"><Subheader/></Typography> 
          <Typography variant="body1" className={classes.landingSubHeader2}><IoIosArrowForward/></Typography>  
        </Grid>
      </>
    );
  }
}

export default withRouter(withStyles(styles)(Home));
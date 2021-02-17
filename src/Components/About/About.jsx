import React, { Component } from 'react';
import Header from '../Header/Header'; 
import Socials from '../Socials/Socials'; 
import {
  AppBar, 
  Toolbar,
  Button, 
  Box, 
  withStyles, 
  Grid, 
  Typography
 } from '@material-ui/core';

const styles = {
  aboutImage:  {
    height:'100px',
    display: 'inline'
  }, 
  imageGrid : { 
    backgroundImage: "url('./images/summary-pic.jpg')", 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height:'500px'
  }
};


class Portfolio extends Component {
  render() {
    const { classes } = this.props;
    return (
      <> 
      {/* this invisible app bar prevents the header from covering the contents of the page */}
      <AppBar position='static' style={{ background: 'transparent', boxShadow: 'none'}}> 
      <Toolbar>
          <Button></Button>
          <Button></Button>
          <Button></Button>
      </Toolbar>
      </AppBar>
      {/* ----------------------------------------------------------------------------------- */}
      <Header background={'rgb(45, 35, 45)'}/> 
      <Box boxShadow={3} style={{margin: '5%', padding: '5%', display: 'inline-block', backgroundColor: 'white'}}>
        <Grid 
        container
        spacing={0}
        direction='row'
        >
          <Grid 
          lg={6} sm={6} xs={12}
          item
          direction='row'>
            <Typography style={{textAlign: 'left'}}>
              Hi! I'm Malik Elate, I am a full stack web engineer. My favorite part of web development
              is working in a team solving a challenging problem. When I'm not coding, you can find my 
              up north hiking and camping with my dog and friends.
            </Typography> 
            <ul style={{textAlign: 'left'}}>
            <li>
              Languages
              <ul>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Python</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </li>
            <li>
              Frameworks + Libraries
              <ul>
                <li>React + Redux + Sagas</li>
                <li>Material UI</li>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Flask</li>
                <li>Angular</li>
                <li>Node + Express + NPM</li>
              </ul>
            </li>
            <li>
              Database
              <ul>
                <li>PostgreSQL</li>
                <li>Postico</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </li>
            <li>
              Hosting
              <ul>
                <li>Heroku</li>
                <li>Amazon Web Services</li>
                <li>MongoDB Atlas</li>
              </ul>
            </li>
          </ul>
          </Grid>
          <Grid lg={6} sm={6} xs={12}
          item
          direction='row'
          className={classes.imageGrid}
          >
          </Grid>
        </Grid>
      </Box>
      <Socials background='transparent' color='rgb(45, 35, 45)'/>
      </>
    );
  }
}

export default withStyles(styles)(Portfolio);

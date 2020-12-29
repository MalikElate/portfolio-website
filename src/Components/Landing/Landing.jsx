import React, { Component } from 'react';
import Summary from '../Summary/Summary'; 
import { withRouter } from 'react-router-dom'
import {
  Grid,
  Button, 
  Typography, 
 } from '@material-ui/core';


class Home extends Component { 

  viewProjects = () => { 
        this.props.history.push('/projects');
  }

  render() {
    const style = { 
      // filter: "brightness(1)!important", 
      // opacity: 1.0
      }
    return (
        <Grid className="App-header"
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ padding: 20, backgroundImage: "url('./images/image100.png')", }}
          > 
          <Typography className="App-h1" style={style} variant="h1">Malik Elate</Typography> 
          <Summary/> 
          <Button onClick={()=>{this.viewProjects()}} style={{color: 'white', marginTop: 50}}>Projects</Button>
        </Grid>
    );
  }
}

export default withRouter((Home));
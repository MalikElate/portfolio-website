import React, { Component } from 'react';
import Header from '../Header/Header'; 
import { withRouter } from 'react-router-dom'; 
import Subheader from '../Subheader/Subheader'; 
import {
  Grid,
  Typography, 
 } from '@material-ui/core';


class Home extends Component { 

  viewProjects = () => { 
        this.props.history.push('/projects');
  }

  render() {

    return (
      <>
      <Header background={'transparent'}/>
        <Grid className="App-header"
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
          style={{ padding: 20, backgroundImage: "url('./images/image100.png')", }}
          > 
          <Typography className="App-h1" variant="h1">Malik Elate</Typography> 
          <Typography className="App-h1" variant="h6"><Subheader/></Typography> 
          {/* <Summary/>  */}
          {/* <Button onClick={()=>{this.viewProjects()}} style={{color: 'white', marginTop: 50}}>Projects</Button> */}
        </Grid>
      </>
    );
  }
}

export default withRouter((Home));
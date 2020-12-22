import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'
import {
 AppBar, 

} from '@material-ui/core';



class Home extends Component {
  render() {
    return (
      <div> 
        <AppBar style={{ background: 'transparent', boxShadow: 'none'}}>
          <h1>Malik Elate</h1>
        </AppBar> 
        <div> 
          <img></img>
        </div>
      </div>
    );
  }
}

export default Home;

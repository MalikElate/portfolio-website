import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'; 
import Summary from '../Summary/Summary'
import Header from '../Header/Header'
import {
 AppBar, 
} from '@material-ui/core';



class Home extends Component {
  render() {
    return (
      <div> 
        <Header/> 
        <Summary/>
      </div>
    );
  }
}

export default Home;

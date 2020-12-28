import React, { Component } from 'react';
import {
  Grid, 
  Typography
} from '@material-ui/core';


class Summary extends Component {
  render() {
    return (
      <Grid className="summary-div">
              <Typography variant={'body1'} style={{width: '40%', textAlign: 'left', marginLeft: 20}}>
                Hi! I'm Malik Elate, I am a full stack web engineer. My favorite part of web development
                is working in a team solving a challenging problem. When I'm not coding, you can find my 
                up north camping and hiking with my dog and friends.
              </Typography>
      </Grid>
    );
  }
}

export default Summary;

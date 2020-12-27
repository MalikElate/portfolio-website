import React, { Component } from 'react';
import {
  Grid, 
  Typography
} from '@material-ui/core';


class Summary extends Component {
  render() {
    return (
          <Grid
          container
          justify="center"
          > 
            <Grid item lg={3} sm={6} xs={12}>
              <Typography
                variant={'body1'}
              >
                Hi! I'm Malik Elate, I am a full stack web engineer. My favorite part of web development
                is working in a team solving a challenging problem. When I'm not coding, you can find my 
                up north camping and hiking with my friends. The purpose of this site is to showcase my 
              </Typography>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}>
              <Typography
                variant={'body1'}
              >
                Hi! I'm Malik Elate, I am a full stack web engineer. My favorite part of web development
                is working in a team solving a challenging problem. When I'm not coding, you can find my 
                up north camping and hiking with my friends. The purpose of this site is to showcase my 
              </Typography>
              </Grid> 
              <Grid item lg={3} sm={6} xs={12}>
                <Typography
                  variant={'body1'}
                >
                  Hi! I'm Malik Elate, I am a full stack web engineer. My favorite part of web development
                  is working in a team solving a challenging problem. When I'm not coding, you can find my 
                  up north camping and hiking with my friends. The purpose of this site is to showcase my 
                </Typography>
              </Grid>
          </Grid>
    );
  }
}

export default Summary;

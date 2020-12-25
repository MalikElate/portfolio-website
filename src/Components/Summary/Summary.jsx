import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom'
import {
  Grid, 
  withStyles, 
  Paper, 
  Typography
} from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    height: 240,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    height: '100%',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class Summary extends Component {
  render() {
    const { classes } = this.props;
    return (
          <Grid
          container
          // wrap='nowrap'
          spacing={100}
          // className={classes.demo}
          // direction="row"
          justify="center"
          // alignItems="center"
          lg={12}
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

export default withStyles(styles)(Summary);

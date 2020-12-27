import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Project from '../Project/Project'; 
import {
  Typography, 
  Grid
} from '@material-ui/core';

class ProjectList extends Component {

  componentDidMount() { 
    this.props.dispatch({type: 'GET_PROJECTS_CARD_INFO'}); 
  }
  
  render() {
    return (
      <> 
        <Typography variant="h4">Projects</Typography>
        {JSON.stringify(this.props.reduxState.projectCardInfo)}
        <Grid 
          container 
        >
          { 
            this.props.reduxState.projectCardInfo.map((project, i) => 
              <Grid className="project-card-grid" key={i} item lg={3} sm={6} xs={12}
              container
              direction="row"
              justify="center"
              alignItems="center"
              style={{ padding: 20 }}
              > 
                <Project projectInfo={this.props.reduxState.projectCardInfo[i]} style={{marginTop:"50"}}/>
              </Grid>
            )
          }
        </Grid>
        
      </>
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(ProjectList); 

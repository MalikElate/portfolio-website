import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import Project from '../Project/Project'; 
import {
  Grid
} from '@material-ui/core';

class ProjectList extends Component {

  componentDidMount() { 
    this.props.dispatch({type: 'GET_PROJECTS_CARD_INFO'}); 
  }
  
  render() {
    return (
        <Grid 
           container
           spacing={0}
           direction="row"
           alignItems="flex-start"
           justify="flex-start"
        >
          { 
            this.props.reduxState.projectCardInfo.map((project, i) => 
              <Grid 
              className="project-card-grid" key={i} item  xs={12} sm={5} lg={3} 
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              style={{ padding: 20}}
              > 
                <Project projectInfo={this.props.reduxState.projectCardInfo[i]} style={{marginTop:"50"}}/>
              </Grid>
            )
          }
        </Grid>  
    );
  }
}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(ProjectList); 

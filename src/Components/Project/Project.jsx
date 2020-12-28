import React, { Component } from 'react';
import {
  Card, 
  Typography, 
  CardActionArea, 
  CardMedia, 
  CardContent, 
  Button, 
  CardActions, 
  withStyles, 
} from '@material-ui/core';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

class Project extends Component {
  render() {
    const { classes } = this.props;
    return (
      <span className='card'>
        <Card className={classes.card}>
          <CardActionArea onClick={() => {window.open(this.props.projectInfo.demoLink);}}>
            <CardMedia
              component="img"
              alt={this.props.projectInfo.title}
              className={classes.media}
              height="5%"
              image={this.props.projectInfo.image}
              title="Contemplative Reptile"
              />
              </CardActionArea>
              <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {this.props.projectInfo.title}
              </Typography>
              <Typography component="p">
              {this.props.projectInfo.description}
              </Typography>
            </CardContent>
          <CardActions>
              <a target="_blank" className="social-link-a" href={this.props.projectInfo.githubLink} rel="noopener noreferrer">
                <Button size="small" color="primary">
                    Code
                </Button>
              </a>
              <a target="_blank" className="social-link-a" href={this.props.projectInfo.demoLink} rel="noopener noreferrer">
                <Button size="small" color="primary">
                  Demo
                </Button>
              </a>
          </CardActions>
      </Card>
      </span>
    );
  }
}

export default withStyles(styles)(Project);
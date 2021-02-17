import React, { Component } from 'react';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { DiStackoverflow } from "react-icons/di";
import {
  IconButton, 
  BottomNavigation, 
  withStyles
} from '@material-ui/core';

const styles = {
  socialIconPage:  {
    color: "rgb(45, 35, 45)",
  }, 
  socialsFooter: { 
    marginTop: "5%"
  }
};
let color; 

class Socials extends Component {
  render() {
    const { classes } = this.props;
    return (
      <BottomNavigation style={{ backgroundColor: this.props.background}} className={classes.socialsFooter}>
        <IconButton>
          <a target="_blank" style={{color: this.props.color}} href="https://github.com/MalikElate" rel="noopener noreferrer">
            <AiOutlineGithub className="logo"/> 
          </a>
        </IconButton>
        <IconButton>
          <a target="_blank" style={{color: this.props.color}} href="https://www.linkedin.com/in/malik-elate/" rel="noopener noreferrer">
            <AiFillLinkedin className="logo"/> 
          </a>
        </IconButton>
        <IconButton>
          <a target="_blank" style={{color: this.props.color}} href="https://stackoverflow.com/users/14720649/melate?tab=profile" rel="noopener noreferrer">
            <DiStackoverflow className="logo"/> 
          </a>
        </IconButton>
        <IconButton>
          <a style={{color: this.props.color}} href="mailto: Malik.e1955@gmail.com">
            <AiOutlineMail className="logo"/> 
          </a>
        </IconButton>
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(Socials);
import React, { Component } from 'react';
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { DiStackoverflow } from "react-icons/di";
import {
  IconButton, 
  BottomNavigation, 
  withStyles
} from '@material-ui/core';

const styles = {
  socialIcon:  {
    color: "rgb(45, 35, 45)",
  }, 
  socialsFooter: { 
    backgroundColor: "rgb(226, 226, 226)", 
    marginTop: "5%"
  }
};

class Socials extends Component {
  render() {
    const { classes } = this.props; 
    return (
      <BottomNavigation className={classes.socialsFooter}>
        <IconButton>
          <a target="_blank" className={classes.socialIcon} href="https://github.com/MalikElate" rel="noopener noreferrer">
            <AiOutlineGithub className="logo"/> 
          </a>
        </IconButton>
        <IconButton>
          <a target="_blank" className={classes.socialIcon} href="https://www.linkedin.com/in/malik-elate/" rel="noopener noreferrer">
            <AiFillLinkedin className="logo"/> 
          </a>
        </IconButton>
        <IconButton>
          <a target="_blank" className={classes.socialIcon} href="https://stackoverflow.com/users/14720649/melate?tab=profile" rel="noopener noreferrer">
            <DiStackoverflow className="logo"/> 
          </a>
        </IconButton>
        <IconButton>
          <a className={classes.socialIcon} href="mailto: Malik.e1955@gmail.com">
            <AiOutlineMail className="logo"/> 
          </a>
        </IconButton>
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(Socials);
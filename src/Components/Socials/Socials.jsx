import React, { Component } from 'react';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { DiStackoverflow } from "react-icons/di";
import {
  IconButton
} from '@material-ui/core';

class Socials extends Component {
  render() {
    return (
      <div className="">
        <IconButton color="inherit">
          <a target="_blank" className="social-link-a" href="https://github.com/MalikElate">
            <AiOutlineGithub className="logo"/> 
          </a>
        </IconButton>
        <IconButton color="inherit">
          <a target="_blank" className="social-link-a" href="https://www.linkedin.com/in/malik-elate/">
            <AiFillLinkedin className="logo"/> 
          </a>
        </IconButton>
        <IconButton color="inherit">
          <a target="_blank" className="social-link-a" href="https://stackoverflow.com/users/14720649/melate?tab=profile">
            <DiStackoverflow className="logo"/> 
          </a>
        </IconButton>
      </div>
    );
  }
}

export default Socials;
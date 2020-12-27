import React, { Component } from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { SiRedux, SiMaterialUi, SiFlask } from "react-icons/si";
import { DiReact,
  DiJavascript1,
  DiPython, 
  DiCss3Full, 
  DiPostgresql, 
  DiJqueryLogo, 
  DiNodejsSmall, 
  DiNpm, 
  DiBootstrap
} from "react-icons/di";
import {
  Typography
} from '@material-ui/core';

class Skills extends Component {
  render() {
    return (
      <div> 
        <Typography variant="h4">Skills</Typography>
        <DiJavascript1 className="logo"/> 
        <DiPython className="logo"/> 
        <AiFillHtml5 className="logo"/> 
        <DiCss3Full className="logo"/> 
        <DiPostgresql className="logo"/> 
        <DiReact className="logo"/> 
        <SiRedux className="logo"/> 
        <SiMaterialUi className="logo"/> 
        <DiJqueryLogo className="logo"/> 
        <SiFlask className="logo"/> 
        <DiNodejsSmall className="logo"/> 
        <DiNpm className="logo"/> 
        <DiBootstrap className="logo"/> 

      </div>
    );
  }
}

export default Skills;
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
  DiBootstrap, 
} from "react-icons/di";
import {
  Typography, 
  Grid
} from '@material-ui/core';

class Skills extends Component {
  render() {
    return (
      <div> 
        <Grid className="summary-div">
        {/* <Typography 
          variant='h4' 
          style={{width: '40%', textAlign: 'left', marginLeft: 20}}>
            Skills
        </Typography> */}
        {/* ----------------- Languages --------------------  */}
        <Typography 
          variant='h5' 
          style={{width: '40%', textAlign: 'left', marginLeft: 40, display: 'inline'}}>
            Languages
        </Typography>
        <Typography 
          variant='h4' 
          style={{width: '40%', textAlign: 'left', marginLeft: 40}}>
          <DiJavascript1 className="logo"/> 
          <DiPython className="logo"/> 
          <AiFillHtml5 className="logo"/> 
          <DiCss3Full className="logo"/> 
          <DiPostgresql className="logo"/> 
        </Typography>
        {/* ----------------- Frameworks and libraries --------------------  */}
        <Typography 
          variant='h5' 
          style={{width: '40%', textAlign: 'left', marginLeft: 40}}>
            Frameworks and libraries
        </Typography>
          {/* <div> */}
            <Typography 
          variant='h4' 
          style={{width: '40%', textAlign: 'left', marginLeft: 40}}> 
            <DiReact className="logo"/>
            {/* <Typography variant='body1' style={{display: 'inline'}}>React</Typography> */}
            <SiRedux className="logo"/> <Typography variant='body1'>Redux</Typography>
            </Typography>
          {/* </div> */}
          <SiMaterialUi className="logo"/> 
          <DiJqueryLogo className="logo"/> 
          <SiFlask className="logo"/> 
          <DiNodejsSmall className="logo"/> 
          <DiBootstrap className="logo"/> 
         {/* ----------------- Environments --------------------  */}
         <Typography 
          variant='h5' 
          style={{width: '40%', textAlign: 'left', marginLeft: 40}}>
            Environments
        </Typography>
        <Typography 
          variant='h4' 
          style={{width: '40%', textAlign: 'left', marginLeft: 50}}> 
          <DiNpm className="logo"/> 
        </Typography>
      </Grid>
      </div>
    );
  }
}

export default Skills;
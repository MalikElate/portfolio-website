import React                       from "react";
// import TextTransition, { presets } from "react-text-transition";
import {
  AppBar, 
  Toolbar,
  Button, 
  Typography, 

 } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';
// const TEXTS = [
//   "Malik Elate",
//   "Building",
//   "Tree",
//   "Color"
// ];

const useStyles = makeStyles((theme) => ({
  appBarTransparent: {
      backgroundColor: 'rgba(67, 129, 168,0.5)'
  },
  appBarSolid: {
      backgroundColor: 'rgba(67, 129, 168)'
  }
}));

const Header = () => {

  // const [index, setIndex] = React.useState(0);
 
  // React.useEffect(() => {
  //   const intervalId = setInterval(() =>
  //     setIndex(index => index + 1),
  //     3000 // every 3 seconds
  //   );
  // });


  return (
    <AppBar position="fixed" style={{ background: 'transparent', boxShadow: 'none'}}> 
      <Toolbar>
          <Button>Contact</Button>
          <Button>Portfolio</Button>
          <Button>Skills</Button>
      </Toolbar>
          <Typography variant="h3">Malik Elate</Typography>
      {/* <h2 style={{textAlign: 'center'}}>
        <TextTransition
          text={ TEXTS[index % TEXTS.length] }
          springConfig={ presets.slow
          }
          delay={5000}
          slow
          className="subheader"
        />
      </h2> */}
    </AppBar> 
  );
};


export default (Header)
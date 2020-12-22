import React                       from "react";
import TextTransition, { presets } from "react-text-transition";
import {
  AppBar, 
 
 } from '@material-ui/core';

const TEXTS = [
  "Malik Elate",
  "Building",
  "Tree",
  "Color"
];
 
const Header = () => {
  const [index, setIndex] = React.useState(0);
 
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
  });
 
  return (
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <h1>
        <TextTransition
          text={ TEXTS[index % TEXTS.length] }
          springConfig={ presets.wobbly }
        />
      </h1>
    </AppBar> 
  );
};


export default Header;

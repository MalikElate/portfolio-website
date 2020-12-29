import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
 
const Subheader = () => {
  return (
    <>
 
      <br />
 
      <ReactTypingEffect
        text={["Web Developer", "Software Engineer", "Full-Stack Engineer", "Programmer"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
    </>
  );
};

export default Subheader; 
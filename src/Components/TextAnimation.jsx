import React from 'react';
import Typewriter from 'typewriter-effect';


function TextAnimation({text}) {
  return (
    <Typewriter
    options={{
        strings: text,
        autoStart: true,
        loop: true,
    }}
/>
  )
}

export default TextAnimation

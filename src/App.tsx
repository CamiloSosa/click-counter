import React, { useState } from 'react';
import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png'
import ButtonFreeCodeCamp from './components/ButtonFreeCodeCamp';
import {Box, Image} from '@chakra-ui/react'
import Counter from "./components/Counter";

function App() {

  const [numberClicks, setNumberClicks] = useState(0);

  const handleClick = () => {
    setNumberClicks(numberClicks + 1);
  }

  const resetCounter = () => {
    setNumberClicks(0);
  }

  return (
    <Box className='App'>
      <Box
        className={'free-code-camp-container-logo'}
      >
        <Image
          className={'free-code-camp-logo'}
          src={freeCodeCampLogo}
          alt={'freeCodeCamp logo'}
        />
      </Box>
      <Box
        className={'principal-container'}
      >
        <Counter
          numberClicks={numberClicks}
        />

        <ButtonFreeCodeCamp
          text={'Click'}
          isClickButton={true}
          handleClick={handleClick}
        />

        <ButtonFreeCodeCamp
          text={'Reset'}
          isClickButton={false}
          handleClick={resetCounter}
        />
      </Box>
    </Box>
  );
}

export default App;

import React from 'react';
import {Button} from '@chakra-ui/react'
import {ButtonTypes} from "../types/button.types";
import '../stylesheets/ButtonFreeCodeCamp.css';



function ButtonFreeCodeCamp(props: ButtonTypes) {
  return (
    <Button
      className={props.isClickButton ? 'click-button' : 'reset-button'}
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  );
}

export default ButtonFreeCodeCamp;
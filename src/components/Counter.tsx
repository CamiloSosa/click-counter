import React from 'react';
import {Box} from "@chakra-ui/react";
import {CounterTypes} from "../types/counter.types";
import '../stylesheets/Counter.css';


function Counter( props: CounterTypes ) {
  return (
    <Box className={'counter'}>
      {props.numberClicks}
    </Box>
  );
}

export default Counter;
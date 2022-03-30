import React from 'react';
import { hideable } from './hocs/hideable';

function Hello() {
  return (
    <div className="Hello">
      Hello Component
    </div>
  );
}

export const HelloHideable = hideable(Hello);
// export const HelloBlue = color(Hello, 'blue');
// export const HelloRed = color(Hello, 'red');
// <HelloColor color="red" />

export default Hello;

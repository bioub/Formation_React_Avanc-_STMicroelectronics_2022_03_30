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

export default Hello;

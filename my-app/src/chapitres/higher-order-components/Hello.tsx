import React from 'react';
import { color } from './hocs/color';
import { hideable } from './hocs/hideable';

type Props = {
  name?: string;
}

function Hello({name}: Props) {
  return (
    <div className="Hello">
      Hello {name}
    </div>
  );
}

export const HelloHideable = hideable(Hello);
export const HelloColor = color(Hello);

export default Hello;

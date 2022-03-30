import React from 'react';

type Prop = {
  children: JSX.Element
}

function Button({ children } : Prop) {
  return (
    <button className="Button">
      {children}
    </button>
  );
}

export default Button;

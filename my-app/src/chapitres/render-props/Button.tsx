import React, { PropsWithChildren } from 'react';

type Prop = {
}

function Button({ children } : PropsWithChildren<Prop>) {
  return (
    <button className="Button">
      {children}
    </button>
  );
}

export default Button;

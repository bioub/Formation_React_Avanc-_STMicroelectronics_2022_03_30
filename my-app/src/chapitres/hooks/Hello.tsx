import React from 'react';

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

export default Hello;

import React from 'react';

function Hello() {
  console.log('Hello renders');
  const name = 'Romain';
  return (
    <div className="Hello">
      Hello {name}
    </div>
  );
}

export default Hello;

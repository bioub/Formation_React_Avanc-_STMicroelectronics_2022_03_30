import React, { useContext } from 'react';
import Clock from './Clock';
import Hello from './Hello';
import { NameContext } from './NameContext';
import Select from './Select';

function Hooks() {
  const { name, setName } = useContext(NameContext);

  return (
    <div className="Hooks">
      <h2>Hooks</h2>
      <Clock />
      <Select items={['Toto', 'Titi', 'Tata']} selected={name} onSelected={setName} />
      <Hello name={name} />
    </div>
  );
}

export default Hooks;

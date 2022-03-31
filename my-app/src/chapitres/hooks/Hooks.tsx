import React, { Component } from 'react';
import Select from './Select';
import Hello from './Hello';
import Clock from './Clock';

class Hooks extends Component {
  state = {
    selected: 'Titi',
  };
  render() {
    const { selected } = this.state;

    const handleSelected = (selected: string) => {
      this.setState({
        selected,
      });
    };
    return (
      <div className="Hooks">
        <h2>Hooks</h2>
        <Clock />
        <Select items={['Toto', 'Titi', 'Tata']} selected={selected} onSelected={handleSelected} />
        <Hello name={selected} />
      </div>
    );
  }
}

export default Hooks;

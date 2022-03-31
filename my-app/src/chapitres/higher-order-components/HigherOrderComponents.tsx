import React, { Component } from 'react';
import Hello, { HelloColor, HelloHideable } from './Hello';
import Select, { SelectColor, SelectHideable } from './Select';

class HigherOrderComponents extends Component {
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
      <div className="HigherOrderComponents">
        <h2>Higher Order Components</h2>
        <Hello />
        <HelloHideable defaultShow={false} />
        <SelectHideable
          defaultShow={false}
          items={['Toto', 'Titi', 'Tata']}
          selected={selected}
          onSelected={handleSelected}
        />

        <Hello /> 
        <HelloColor color="blue" /> 
        <HelloColor color="red" /> 
        <Select items={['Toto', 'Titi', 'Tata']}
            selected={selected}
            onSelected={handleSelected}/>
        <SelectColor
            color='red'
            items={['Toto', 'Titi', 'Tata']}
            selected={selected}
            onSelected={handleSelected} />
      </div>
    );
  }
}

export default HigherOrderComponents;

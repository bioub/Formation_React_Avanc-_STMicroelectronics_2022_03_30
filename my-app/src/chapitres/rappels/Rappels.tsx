import React, { Component } from 'react';
import Select from './Select';
import Hello from './Hello';

class Rappels extends Component {
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
      <div className="Rappels">
        <h2>Rappels</h2>
        <div>
          {/* React.createElement(Select, {items: [], selected: ''}) */}
          Prénom :{' '}
          <Select
            items={['Toto', 'Titi', 'Tata']}
            selected={selected}
            onSelected={handleSelected}
          />
          <Hello name={selected} />
        </div>
        <div>Prénom sélectionné : {selected}</div>

        <h2>event.preventDefault()</h2>
        <a href="https://www.google.fr/" onClick={(event) => event.preventDefault()}>
          Google
        </a>
        <input
          type="text"
          onBeforeInput={(event: any) => {
            if (isNaN(Number(event.nativeEvent.data))) {
              event.preventDefault();
            }
          }}
        />
      </div>
    );
  }
}

export default Rappels;

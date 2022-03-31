import React, { Component } from 'react';
import Select from './Select';
import Hello from './Hello';
import SelectRenderItemComp from './SelectRenderItemComp';
import SelectItem from './SelectItem';
import Button from './Button';
import Hideable from './Hideable';

class RenderProps extends Component {
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
      <div className="RenderProps">
        <h2>Render Props</h2>
        <div>
          {/* React.createElement(Select, {items: [], selected: ''}) */}
          Prénom :{' '}
          <Select
            items={['Toto', 'Titi', 'Tata']}
            selected={selected}
            onSelected={handleSelected}
            renderValue={<i>{selected}</i>}
            renderItem={(item) => (item === selected ? <b>{item}</b> : item)}
          />
          <SelectRenderItemComp
            items={['Toto', 'Titi', 'Tata']}
            selected={selected}
            onSelected={handleSelected}
            renderValue={<i>{selected}</i>}
            componentItem={SelectItem}
          />
        </div>
        <div>Prénom sélectionné : {selected}</div>


        <Button>
          <b>Mon contenu</b>
        </Button>

        <Hideable>
          <Hello />
        </Hideable>
      </div>
    );
  }
}

export default RenderProps;

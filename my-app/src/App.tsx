import { Component } from 'react';
import Button from './Button';
import DemoRenderProps from './DemoRenderProps';
import DemoRenderPropsWithComponent from './DemoRenderPropsWithComponent';
import Select from './Select';
import SelectItem from './SelectItem';
import SelectRenderItemComp from './SelectRenderItemComp';

class App extends Component {
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
      <div className="App" onClick={() => console.log('App click')}>
        <div>
          {/* React.createElement(Select, {items: [], selected: ''}) */}
          Prénom :{' '}
          <Select
            items={['Toto', 'Titi', 'Tata']}
            selected={selected}
            onSelected={handleSelected}
            renderValue={<i>{selected}</i>}
            renderItem={(item) => (item === selected) ? <b>{item}</b> : item}
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

        <h2>Render Props</h2>
        <DemoRenderProps renderTitle={(title) => <h1>{title}</h1>} renderContent={(content) => <b>{content}</b>} />

        <DemoRenderPropsWithComponent renderTitle={MyTitle} />

        <Button>
          <b>Mon contenu</b>
        </Button>
      </div>
    );
  }
}

function MyTitle(props: any) {
  return <h3>{props.title}</h3>;
}

export default App;

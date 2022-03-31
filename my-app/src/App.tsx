import { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HigherOrderComponents from './chapitres/higher-order-components/HigherOrderComponents';
import Hooks from './chapitres/hooks/Hooks';
import Rappels from './chapitres/rappels/Rappels';
import RenderProps from './chapitres/render-props/RenderProps';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Rappels</Link>
          <Link to="/render-props">Render Props</Link>
          <Link to="/hocs">Higher Order Components</Link>
          <Link to="/hooks">Hooks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Rappels />} />
          <Route path="render-props" element={<RenderProps />} />
          <Route path="hocs" element={<HigherOrderComponents />} />
          <Route path="hooks" element={<Hooks />} />
        </Routes>
        
      </div>
    );
  }
}



export default App;

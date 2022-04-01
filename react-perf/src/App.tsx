import Hello from './Hello';
import Clock from './Clock';
import Todos from './todos/Todos';
import ClockWithControls from './ClockWithControls';

function App() {
  console.log('App renders');
  
  return (
    <div className="App">
      <Hello />
      <ClockWithControls />
      <Todos />
    </div>
  );
}

export default App;

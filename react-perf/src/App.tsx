import Hello from './Hello';
import Clock from './Clock';
import Todos from './todos/Todos';

function App() {
  console.log('App renders');
  
  return (
    <div className="App">
      <Hello />
      {/* <Clock /> */}
      <Todos />
    </div>
  );
}

export default App;

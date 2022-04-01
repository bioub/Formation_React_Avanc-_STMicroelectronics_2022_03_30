import { Component, lazy, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HigherOrderComponents from './chapitres/higher-order-components/HigherOrderComponents';
import Hooks from './chapitres/hooks/Hooks';
import Rappels from './chapitres/rappels/Rappels';
import RenderProps from './chapitres/render-props/RenderProps';
import ErrorBoundary from './chapitres/error-boundaries/ErrorBoundary';
// import BundleSize from './chapitres/bundle-size/BundleSize';

const BundleSize = lazy(() => import('./chapitres/bundle-size/BundleSize'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Rappels</Link>
          <Link to="/render-props">Render Props</Link>
          <Link to="/hocs">Higher Order Components</Link>
          <Link to="/hooks">Hooks</Link>
          <Link to="/bundle-size">Bundle Size</Link>
        </nav>
        {/* React.createElement(ErrorBoundary, {}, ...) */}
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Rappels />} />
              <Route path="render-props" element={<RenderProps />} />
              <Route path="hocs" element={<HigherOrderComponents />} />
              <Route path="hooks" element={<Hooks />} />
              <Route path="bundle-size" element={<BundleSize />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        
      </div>
    );
  }
}



export default App;

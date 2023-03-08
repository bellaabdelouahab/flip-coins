import './App.css';
import Flipp from './components/Flipp/Flipp';
import Nav from './components/Nav/Nav';
import Pay from './components/PaytoPlay/Pay';

function App() {
  return (
    <div className="holder_components">
      <Pay />
      <div className="second_componenet">
        <Nav />
        <Flipp />
      </div>
    </div>
  );
}

export default App;

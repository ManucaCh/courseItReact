import './App.css';
import Fruits from './components/Fruits';
import Counter from './components/Counter';
import Props from './components/Props'

function App() {
 
  return (
  <>
  <Counter />
  <Fruits />
  <Props title="Título de una prop"/>
  </>
  );
}

export default App;

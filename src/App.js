import "./App.css";
import Fruits from "./components/Fruits";
import Counter from "./components/Counter";
import Props from "./components/Props";

function App() {
  function handleCallback(data) {
    console.log(data);
  }

  return (
    <>
      <Counter />
      <Fruits />
      <Props title="Título de una prop" />
      <Callback callback={handleCallback} />
    </>
  );
}

export default App;

import "../../App.css";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [showCounter, setShowCounter] = useState(false);
  const showCounterClick = () => setShowCounter(prev => !prev);


  const ShowCounter = () => (
    <div>
      <div>
        <h1>El valor de counter es {counter}</h1>
      </div>

      <div>
        <button name="add" onClick={handleClick}>⇧</button>
        <button name="decrease" onClick={handleClick}>⇩</button>
      </div>
    </div>
  );

  function handleClick(e){
      const {name} = e.target
      if (name === "add") {setCounter(prev => prev + 1)}
      else{ setCounter(prev => prev -1)
      }
  }

  return (
    <div>
      <button onClick={showCounterClick}>{showCounter ? "Ocultar Counter" : "Mostrar Counter"}</button>
      {showCounter ? <ShowCounter /> : <h3>Click en el boton</h3>}
    </div>
  );
}

export default Counter;

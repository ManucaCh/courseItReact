import { useState } from 'react';

function Fruits() {
  const [showList, setShowList] = useState(false)
  const [frutas, ] = useState(['banana', 'manzana', 'melón', 'naranja', 'uvas'])
  const showListClick = () => setShowList(prev => !prev)

  


  return (
    <div>
      <button onClick={showListClick}>{showList ? "Ocultar Lista" : "Mostrar Lista"}</button>
    <ul>
      {showList && frutas.map((fruta, key) => { return <li key={key}>{fruta}</li>})}
      
    </ul>
  </div>
  );
}

export default Fruits;

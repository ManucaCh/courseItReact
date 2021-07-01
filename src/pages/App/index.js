// import "./App.css";
import Fruits from "../../components/Fruits";
import Counter from "../../components/Counter";
import Props from "../../components/Props";
import NumRand from "../../components/Callback/NumRand";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [numero1, setNumero1] = useState(false);
  const [numero2, setNumero2] = useState(false);
  const [resultado, setResultado] = useState(false);
  useEffect(() => {
    if (numero1 && numero2) {
      if (numero1 > numero2) {
        setResultado(numero1);
        console.log(numero1);
      } else if (numero1 < numero2) {
        setResultado(numero2);
        console.log(numero2);
      } else {
        setResultado("Los numero son iguales");
        console.log(3);
      }
    } else {
      console.log(numero1, numero2);
    }
  }, [numero1, numero2]);

  function handleCallback(value, name) {
    if (name == "numero1") {
      setNumero1(value);
    } else {
      setNumero2(value);
    }
  }

  return (
    <>
      {/* <Counter />
      <Fruits />
      <Props title="Título de una prop" /> */}
      <p>Soy la home de esta aplicaciopn</p>
      <Link to="/equipo">Ir a la pagina de Equipo</Link>
      <NumRand callback={handleCallback} name="numero1" />
      <NumRand callback={handleCallback} name="numero2" />
      <p>{resultado}</p>
    </>
  );
}

export default App;

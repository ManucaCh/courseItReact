import { useState } from "react";

function NumRand(props) {
  const [random, setRandom] = useState(Math.floor(Math.random() * 10 + 1));
  function handleClick() {
    props.callback(random, props.name);
  }
  return <h2 onClick={handleClick}>Numero {random}</h2>;
}

export default NumRand;

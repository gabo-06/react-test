import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("inicio");
    console.log("mierda");
    console.log("esto es una prueba");
    console.log("tongazo");
    console.log("quiero que vuelva");
    console.log("por qué son tan pelotudos");
    console.log("con todo");
  });

  return (
    <div>
      <button
        onClick={() => {
          setContador(contador + 1);
        }}
      >
        contar
      </button>
      <div>El contador está en: {contador}</div>
    </div>
  );
}

export default App;

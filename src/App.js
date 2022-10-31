import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("inicio");
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

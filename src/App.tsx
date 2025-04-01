import { useState } from "react";
import Card from "./card";
import "./App.css";

interface PerrosLista {
  id: number;
  image: string;
  feoCount: number;
  bonitoCount: number;
}

function App() {
  const [perros, setPerros] = useState<PerrosLista[]>([]);

  const agregarPerro = () => {
    const nuevoPerro: PerrosLista = {
      id: Date.now(),
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFUAfyVe3Easiycyh3isP9wDQTYuSmGPsPQvLIJdEYvQ_DsFq5Ez2Nh_QjiS3oZ3B8ZPfK9cZQyIStmQMV1lDPLw",
      feoCount: 0,
      bonitoCount: 0,
    };

    setPerros([...perros, nuevoPerro]);
  };
  return (
    <>
      <button className="btm-añadir-final" onClick={agregarPerro}></button>
    </>
  );
}

export default App;

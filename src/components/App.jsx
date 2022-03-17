import { useState } from "react";
import TelaInicial from "./Inicio/TelaInicial";
import FlashCards from "./Jogo/FlashCards";

export default function App() {
  let [tela, setTela] = useState(false);

  function startTela() {  
    setTela(tela = true);
  }

  return ( 
    <>
      {tela === false ? <TelaInicial fn={startTela}/> : <FlashCards /> }
    </>
    
  );
} 

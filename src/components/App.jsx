import { useState } from "react";
import TelaInicial from "./Inicio/TelaInicial";
import FlashCards from "./Jogo/FlashCards";
import Footer from "./Footer/footer";

export default function App() {
  let [tela, setTela] = useState(false);

  function startTela() {  
    setTela(tela = true);
  }

  return ( 
    <>
      {!tela ? <TelaInicial startTela={startTela}/> : <> <FlashCards /> <Footer /> </> }
    </>
    
  );
} 

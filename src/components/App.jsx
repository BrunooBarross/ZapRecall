import React from "react";
import TelaInicial from "./Inicio/TelaInicial";
import FlashCards from "./Jogo/FlashCards";
import Footer from "./Footer/footer";

export default function App() {
  let [tela, setTela] = React.useState(false);
  let [contador, setContador] = React.useState(0);
  let [icones, setIcones] = React.useState([]);

  function startTela() {
    setTela(tela = true);
  }
  function funcaoContar() {
    setContador(contador = contador + 1);
  }
  function iconesFooter(icone){
    let arrayAnterior = [...icones];
    arrayAnterior.push(icone)
    setIcones(icones = arrayAnterior)

  }

  return (
    <>
      {!tela ? <TelaInicial startTela={startTela} /> : 
        <> <FlashCards funcaoContar={funcaoContar} iconesFooter={iconesFooter}/>
          <Footer contador={contador} icones={icones}/> 
        </>}
    </>

  );
} 

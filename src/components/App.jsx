import React from "react";
import TelaInicial from "./Inicio/TelaInicial";
import FlashCards from "./Jogo/FlashCards";
import Footer from "./Footer/footer";

export default function App() {
  let [tela, setTela] = React.useState(false);
  let [contador, setContador] = React.useState(0);
  let [icones, setIcones] = React.useState([]);
  let [textoFooter, setTextoFooter] = React.useState();
  
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
    if(icones.length === 8){
      for(let i = 0; i< icones.length; i++){
        if(icones[i].props.data === 'errado'){
          return setTextoFooter(textoFooter = true)
        }          
      }
      setTextoFooter(textoFooter = false)
    }   
  }

  return (
    <>
      {!tela ? <TelaInicial startTela={startTela} /> : 
        <> <FlashCards funcaoContar={funcaoContar} iconesFooter={iconesFooter}/>
          <Footer contador={contador} icones={icones} textoFooter={textoFooter}/> 
        </>}
    </>

  );
} 

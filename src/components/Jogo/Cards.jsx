import React from "react";
import Botoes from "./Botoes";

function Cards(props) {
    const [selected, setSelected] = React.useState('questao'); 

    function selecionar(selecionado) {
        setSelected(selecionado);
    }
    
    return selected === 'questao' ?( 
            <div className={"questao"} onClick={() => selecionar('pergunta')}>
                <span>{props.questao} {props.indice +1}</span>
                <ion-icon name="play-outline"></ion-icon>
            </div>             
        ) :(
            selected === 'pergunta' ? 
                <div className={"pergunta"}>
                    <span>{props.pergunta}</span>
                    <img className="virar-card" src="img/Vector.png" alt="virar" 
                    onClick={() => selecionar('resposta')}/>
                </div> 
            : 
                <div className={"pergunta"}>
                    <span>{props.resposta}</span>
                    <Botoes />  
                </div>                        
    );                
}
export default Cards;
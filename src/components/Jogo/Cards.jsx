import React from "react";
import Botoes from "./Botoes";

function Cards(props) {
    let [selected, setSelected] = React.useState('questao'); 
    let [finalizar, setFinalizar] = React.useState('questao');
    let [status, setStatus] = React.useState('verde');

    function selecionar(selecionado, riscarQuestao) {
        setSelected(selecionado);
        setFinalizar(finalizar= `questao ${riscarQuestao}`);
        setStatus(status = riscarQuestao);
    }

    if(selected === 'questao'){
        return (
            <div className={finalizar} onClick={() => selecionar('pergunta')}>
                <span>{props.questao} {props.indice +1}</span>
                <ion-icon name="play-outline"></ion-icon>             
            </div>  
        );
        
    } else if(selected === 'finalizar'){
        return (
            <div className={finalizar}>
                <span>{props.questao} {props.indice +1}</span>
                {status === 'vermelho' ? <ion-icon name="close-circle"></ion-icon>   :
                status === 'laranja' ? <ion-icon name="help-circle"></ion-icon> :
                <ion-icon name="checkmark-circle"></ion-icon>}
            </div>  
        );
    }else if(selected === 'pergunta'){
        return (
            <div className={"pergunta"}>
                <span>{props.pergunta}</span>
                <img className="virar-card" src="img/Vector.png" alt="virar" 
                onClick={() => selecionar('resposta')}/>
            </div> 
        );
    }else{
        return(
            <div className={"pergunta"}>
                <span>{props.resposta}</span>
                <Botoes selecionar={selecionar}/>  
            </div>  
        );
    }    
     
}
export default Cards;
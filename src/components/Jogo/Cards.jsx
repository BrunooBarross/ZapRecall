import React from "react";
import Botoes from "./Botoes";

function Cards(props) {
    let [selected, setSelected] = React.useState('questao');    
    let [status, setStatus] = React.useState();
    let [finalizar, setFinalizar] = React.useState();

    function selecionar(selecionado, classeCor, statusQuestao) {
        setSelected(selecionado);
        if(classeCor !== undefined && statusQuestao !== undefined){
            setFinalizar(finalizar = `questao ${classeCor}`);
            setStatus(status = statusQuestao);
            props.funcaoContar();
            props.iconesFooter(statusQuestao);
        }        
    }

    if(selected === 'questao'){
        return (
            <div className={selected} onClick={() => selecionar('pergunta')}>
                <span>{props.questao} {props.indice +1}</span>
                <img src="img/play.png" alt="" />
            </div>  
        );
        
    } else if(selected === 'finalizar'){
        return (
            <div className={finalizar}>
                <span>{props.questao} {props.indice +1}</span>
                {status}
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
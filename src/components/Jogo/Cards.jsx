import { useState } from "react";

function Cards(props) {
    let [questao, setQuestao] = useState('exibir');
    let [pergunta, setPergunta] = useState('pergunta escondida');
    
    function exibirPergunta(){
        setQuestao(questao = 'questao escondida');
        setPergunta(pergunta = 'pergunta exibir');
    }

    return (
        <>
            <div className={"questao " + questao } onClick={exibirPergunta}>
                <span>{props.questao} {props.indice +1}</span>
            </div>
            <div className={"pergunta " + pergunta}>
                <span>{props.pergunta}</span>
                <img className="virar-card" src="img/Vector.png" alt="virar" />
            </div>
        </>        
    );                
}

export default Cards;
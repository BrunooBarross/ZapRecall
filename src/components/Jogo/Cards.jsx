import { useState } from "react";

function Cards(props) {
    let [questao, setQuestao] = useState('exibir');
    let [pergunta, setPergunta] = useState('esconder');
    
    function exibirPergunta(){
        setQuestao(questao = 'esconder');
        setPergunta(pergunta = 'exibir');
    }

    return (
        <>
            <div className={"questao " + questao } onClick={exibirPergunta}>
                <span>{props.questao} {props.indice +1}</span>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            <div className={"pergunta " + pergunta}>
                <span>{props.pergunta}</span>
                <img className="virar-card" src="img/Vector.png" alt="virar" />
            </div>
        </>        
    );                
}
export default Cards;
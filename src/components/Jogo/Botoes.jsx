function Botoes(props){
    const {selecionar} = props;
    
    let errou, quase, acertou;
    errou = <img src="img/errado.png" alt="não lembrou" />;
    quase = <img src="img/quase.png" alt="quase acertou" />
    acertou = <img src="img/certo.png" alt="acertou" />

    return (
        <div className="botao">
            <button className="botao-nao" onClick={() => selecionar('finalizar', 'vermelho',errou)}>Não lembrei</button>
            <button className="botao-quase" onClick={() => selecionar('finalizar','laranja',quase)}>Quase não lembrei</button>
            <button className="botao-zap" onClick={() => selecionar('finalizar','verde',acertou)}>Zap!</button>
        </div>    
    );   
}
export default Botoes;
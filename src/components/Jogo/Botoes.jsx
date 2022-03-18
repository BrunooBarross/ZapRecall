function Botoes(props){
    const {selecionar} = props;
    return (
        <div className="botao">
            <button className="botao-nao" onClick={() => selecionar('finalizar','vermelho')}>Não lembrei</button>
            <button className="botao-quase" onClick={() => selecionar('finalizar','laranja')}>Quase não lembrei</button>
            <button className="botao-zap" onClick={() => selecionar('finalizar','verde')}>Zap!</button>
        </div>    
    );   
}
export default Botoes;
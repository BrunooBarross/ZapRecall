import Cards from "./Cards";
function FlashCards(props){
    const dados = [
        {questao: 'Pergunta', pergunta: 'O que é JSX?', resposta: 'Uma extensão de linguagem do JavaScript'},
        {questao: 'Pergunta', pergunta: 'O React é __ ', resposta: 'uma biblioteca JavaScript para construção de interfaces'},
        {questao: 'Pergunta', pergunta: 'Componentes devem iniciar com __', resposta: 'letra maiúscula'},
        {questao: 'Pergunta', pergunta: 'Podemos colocar __ dentro do JSX', resposta: 'expressões'},
        {questao: 'Pergunta', pergunta: 'O ReactDOM nos ajuda __', resposta: 'interagindo com a DOM para colocar componentes React na mesma'},
        {questao: 'Pergunta', pergunta: 'Usamos o npm para __', resposta: 'gerenciar os pacotes necessários e suas dependências'},
        {questao: 'Pergunta', pergunta: 'Usamos props para __', resposta: 'passar diferentes informações para componentes '},
        {questao: 'Pergunta', pergunta: 'Usamos estado (state) para __', resposta: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente'}
    ];
    
    dados.sort(() => Math.random() - 0.5);
    return (
        <div className="pagina-card">
            <div className="logo">
                <img src="img/logo.png" alt="logo"/>
                <h1 className='h1-inicio'>ZapRecall</h1>
            </div>
            <div className="container-cards">
                {dados.map((dado,indice) =>
                    <Cards  questao={dado.questao} 
                            indice = {indice}
                            pergunta = {dado.pergunta}
                            resposta ={dado.resposta}
                            funcaoContar={props.funcaoContar}
                            iconesFooter={props.iconesFooter}
                    />
                )}
            </div>            
        </div>
    );
}
export default FlashCards;
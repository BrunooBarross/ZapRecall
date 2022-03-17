import Cards from "./Cards";
function FlashCards(){
    const dados = [
        {questao: 'Pergunta', pergunta: 'O que é JSX?'},
        {questao: 'Pergunta', pergunta: 'O React é __ '},
        {questao: 'Pergunta', pergunta: 'Componentes devem iniciar com __'},
        {questao: 'Pergunta', pergunta: 'Podemos colocar __ dentro do JSX'},
        {questao: 'Pergunta', pergunta: 'O ReactDOM nos ajuda __'},
        {questao: 'Pergunta', pergunta: 'Usamos o npm para __'},
        {questao: 'Pergunta', pergunta: 'Usamos props para __'},
        {questao: 'Pergunta', pergunta: 'Usamos estado (state) para __'}
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
                    />
                )}
            </div>            
        </div>
    );
}
export default FlashCards;
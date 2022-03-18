function TelaInicial(props){
    const {startTela} = props;
    return(
        <div className="tela-inicial">
            <img src="img/logo.png" alt="logo"/>
            <h1 className='h1-inicio'>ZapRecall</h1>
            <button onClick={startTela}>Iniciar Recall!</button>
        </div>        
    )
}  
export default TelaInicial;
function Footer(props){
    const {contador, icones, textoFooter} = props;    
    return(
        <footer className="footer">                  
            {textoFooter === undefined ? <span>{contador}/8 CONCLUÍDOS</span> : 
                textoFooter === true ? 
                <>
                    <div className="footer-resultado">
                        <img src="/img/sad.png" alt="parabéns" />
                        <p>Putz...</p> 
                    </div>
                    <span>Ainda faltam alguns...Mas não desanime!</span>
                </>    
                :
                <>
                    <div className="footer-resultado">
                        <img src="/img/party.png" alt="parabéns" />
                        <p>Parabéns!</p> 
                    </div>
                    <span>Você não esqueceu de nenhum flashcard!</span>
                </>                    
            }   
            <div className="footer-icones">{icones}</div>     
        </footer>        
    )
}  
export default Footer;
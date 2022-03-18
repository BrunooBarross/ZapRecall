function Footer(props){
    const {contador, icones, textoFooter} = props;    
    return(
        <footer className="footer">                  
            {textoFooter === undefined ? <span>{contador}/8 CONCLUÍDOS</span> : 
                textoFooter === true ?  <span>errou</span> :
                <span>/acertou tudo</span>
            }   
            <div className="footer-icones">{icones}</div>     
        </footer>        
    )
}  
export default Footer;
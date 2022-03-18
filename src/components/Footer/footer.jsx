function Footer(props){
    const {contador, icones} = props;

    return(
        <footer className="footer">                  
            <span>{contador}/8 CONCLUÍDOS</span>
            <div>{icones}</div>     
        </footer>        
    )
}  
export default Footer;
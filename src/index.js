import ReactDOM from "react-dom";
import App from "./components/App"; 

Renderizar();
export default function Renderizar(){
    ReactDOM.render(<App />, document.querySelector(".root"));
}


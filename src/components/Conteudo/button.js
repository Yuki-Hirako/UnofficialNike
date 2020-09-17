import React from "react";
import "../Conteudo/conteudo.css";

function Botao(props) {
    const { text } = props;
    return (
        <div className="botao">
            <button type="button" className="bot">
                {text}
            </button>
        </div>
    );
}
export default Botao;

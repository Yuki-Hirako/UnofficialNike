import React from "react";
import "../Conteudo/conteudo.css";
import Botao from "./button";

function Conteudo() {
    return (
        <>
            <div className="bloco_imagem">
                <img className="imagem" alt="Imagem Principal" />
            </div>
            <div className="titulos">
                <h2 className="titulo">AIR MAX VERONA</h2>
                <span className="subtitulo">
                    O Air Max Exclusivo para Elas.
                </span>
                <div className="botao">
                    <button type="button" className="bot">
                        Ver AM Verona
                    </button>
                    <button type="button" className="bot">
                        Família Air Max
                    </button>
                </div>
            </div>
        </>
    );
}

export default Conteudo;

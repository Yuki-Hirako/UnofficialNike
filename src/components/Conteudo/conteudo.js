import React, {Fragment} from 'react';
import '../Conteudo/conteudo.css';

function Conteudo(){
    return (
        <>
        <div className="bloco_imagem">
            <img className="imagem"></img>
        </div>
        <div class="titulos">
                <h2 class="titulo">AIR MAX VERONA</h2>
                <span class="subtitulo">O Air Max Exclusivo para Elas.</span>
                <div class="botao"></div>
        <div className="botao">
            <button type='button' className='bot'>Ver AM Verona</button>
            <button type="button" className="bot">Família Air Max</button>
        </div>
        </div>
    </>
    );
}

export default Conteudo;
import React, { useState } from "react";
import "./form.css";
import axios from "axios";
import "../Conteudo/conteudo.css";

function Form({ buttonText, enviaFormulario }) {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    return (
        <>
            <div className="form-div">
                <form onSubmit={(e) => enviaFormulario(e, email, pwd)}>
                    <div className="e-mail">
                        <input
                            type="email"
                            value={email}
                            placeholder="Digite seu e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="senha">
                        <input
                            type="password"
                            value={pwd}
                            placeholder="Senha"
                            onChange={(e) => setPwd(e.target.value)}
                        />
                    </div>

                    <div className="botao">
                        <button type="submit" className="bot">
                            {buttonText}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;

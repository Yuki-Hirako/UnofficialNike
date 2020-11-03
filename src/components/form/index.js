import React, { useState } from "react";
import "./form.css";
import "../Conteudo/conteudo.css";

function Form({ buttonText, enviaFormulario }) {
    const [email, setEmail] = useState("");
    const [admin, setAdmin] = useState(false);
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");

    return (
        <>
            <div className="form-div">
                <form
                    onSubmit={(e) =>
                        enviaFormulario(e, email, userName, pwd, admin)
                    }
                >
                    <div className="e-mail">
                        <input
                            type="text"
                            value={email}
                            placeholder="Digite seu e-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="username">
                        <input
                            type="text"
                            value={userName}
                            placeholder="Digite seu nome de usuário"
                            onChange={(e) => setUserName(e.target.value)}
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
                    <div className="checkbox">
                        <div className="content">
                            <input
                                type="checkbox"
                                id="admin"
                                value={admin}
                                onChange={(e) =>
                                    setAdmin((oldValue) => !oldValue)
                                }
                            />
                            <label htmlFor="admin">Administrador</label>
                        </div>
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

function LoginForm({ buttonText, enviaFormulario }) {
    const [userName, setUserName] = useState("");
    const [pwd, setPwd] = useState("");

    return (
        <>
            <div className="form-div">
                <form onSubmit={(e) => enviaFormulario(e, userName, pwd)}>
                    <div className="username">
                        <input
                            type="text"
                            value={userName}
                            placeholder="Digite seu nome de usuário"
                            onChange={(e) => setUserName(e.target.value)}
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

export { LoginForm, Form };

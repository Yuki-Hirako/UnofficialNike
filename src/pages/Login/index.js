import React from "react";
import Form from "../../components/form";
import TitlePag from "../../components/title";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "../Login/login.css";

export default function Login() {
    let history = useHistory();

    async function enviaFormulario(e, email, password) {
        e.preventDefault();
        const resposta = await axios({
            method: "post",
            url: "https://reqres.in/api/login",
            data: {
                email,
                password,
            },
        });
        if (resposta.data) {
            localStorage.setItem("token", resposta.data.token);
            history.push("/projeto2-web");
        }
    }

    return (
        <div>
            <TitlePag text="Entrar" />
            <Form buttonText="Login" enviaFormulario={enviaFormulario} />
            <div className="link">
                <Link to="/projeto2-web/register">
                    Não está registrado? Junte-se a nós.
                </Link>
            </div>
        </div>
    );
}

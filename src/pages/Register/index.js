import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "../../components/form";
import TitlePag from "../../components/title";

export default function Register() {
    let history = useHistory();

    async function enviaFormulario(e, email, password) {
        e.preventDefault();
        const resposta = await axios.post("https://reqres.in/api/register", {
            email,
            password,
        });
        if (resposta.data) {
            localStorage.setItem("token", resposta.data.token);
            history.push("/projeto2-web");
        }
    }

    return (
        <div>
            <TitlePag text="Inscreva-se" />
            <Form buttonText="Criar Conta" enviaFormulario={enviaFormulario} />

            <div className="link">
                <Link to="/projeto2-web/login">
                    Já é um usuário? Fazer login.
                </Link>
            </div>
        </div>
    );
}

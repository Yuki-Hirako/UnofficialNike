import React, { useEffect, useState } from "react";
import Form from "../../components/form";
import TitlePag from "../../components/title";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "../Register/notification.css";

const MESSAGE_TIMEOUT = 2000;

export default function Login() {
    let history = useHistory();
    const [message, setMessage] = useState({ message: "", type: "" });

    async function enviaFormulario(e, email, password) {
        e.preventDefault();
        try {
            const resposta = await axios({
                method: "post",
                url: "https://reqres.in/api/login",
                data: {
                    email,
                    password,
                },
            });
            if (resposta.data) {
                setMessage({
                    message: "Login realizado com sucesso.",
                    type: "success",
                });
                localStorage.setItem("token", resposta.data.token);
                setTimeout(() => {
                    history.push("/projeto2-web");
                }, MESSAGE_TIMEOUT);
            }
        } catch (error) {
            setMessage({
                message: "Ocorreu um erro ao logar. Tente novamente.",
                type: "error",
            });
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage({ message: "", type: "" });
        }, MESSAGE_TIMEOUT);
        return () => {
            clearTimeout(timer);
        };
    }, [message]);

    return (
        <div>
            <div
                className={`message ${
                    message.message ? "visible" : "invisible"
                } ${message.type}`}
            >
                {message.message}
            </div>
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

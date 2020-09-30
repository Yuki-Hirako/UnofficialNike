import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "../../components/form";
import TitlePag from "../../components/title";
import "./notification.css";

const MESSAGE_TIMEOUT = 2000;

export default function Register() {
    let history = useHistory();
    const [message, setMessage] = useState({ message: "", type: "" });

    async function enviaFormulario(e, email, password) {
        e.preventDefault();
        try {
            const resposta = await axios.post(
                "https://reqres.in/api/register",
                {
                    email,
                    password,
                }
            );
            if (resposta.data) {
                setMessage({
                    message: "Registro realizado com sucesso.",
                    type: "success",
                });
                localStorage.setItem("token", resposta.data.token);
                setTimeout(() => {
                    history.push("/projeto2-web");
                }, MESSAGE_TIMEOUT);
            }
        } catch (error) {
            setMessage({
                message: "Ocorreu um erro ao registrar. Tente novamente.",
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

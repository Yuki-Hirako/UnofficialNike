import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form } from "../../components/form";
import TitlePag from "../../components/title";
import "./notification.css";
import { useCookies } from "react-cookie";

const MESSAGE_TIMEOUT = 2000;

export default function Register() {
    let history = useHistory();
    const [cookies, setCookie] = useCookies(["token"]);
    const [message, setMessage] = useState({ message: "", type: "" });

    async function enviaFormulario(e, email, userName, password, userType) {
        e.preventDefault();
        try {
            const resposta = await axios.post(
                "https://UnofficialNike-backend-wat.herokuapp.com/cadastro",
                {
                    email,
                    userName,
                    password,
                    userType: userType ? "admin" : "common",
                }
            );
            if (resposta.data) {
                setCookie("token", resposta.data.token, {
                    path: "/",
                });
                setMessage({
                    message: "Cadastro realizado com sucesso.",
                    type: "success",
                });
                setTimeout(() => {
                    history.push("/UnofficialNike");
                }, MESSAGE_TIMEOUT);
            }
        } catch (error) {
            setMessage({
                message: error.response.data.error,
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
                <Link to="/UnofficialNike/login">
                    Já é um usuário? Fazer login.
                </Link>
            </div>
        </div>
    );
}

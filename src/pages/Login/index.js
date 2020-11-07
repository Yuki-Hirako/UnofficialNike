import React, { useEffect, useState } from "react";
import { LoginForm } from "../../components/form";
import TitlePag from "../../components/title";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "../Register/notification.css";
import { useCookies } from "react-cookie";

const MESSAGE_TIMEOUT = 2000;

export default function Login() {
    let history = useHistory();
    const [cookies, setCookie] = useCookies(["token"]);
    const [message, setMessage] = useState({ message: "", type: "" });

    async function enviaFormulario(e, userName, password) {
        e.preventDefault();
        try {
            const resposta = await axios({
                method: "post",
                url: "https://UnofficialNike-backend-wat.herokuapp.com/login",
                data: {
                    userName,
                    password,
                },
            });

            if (resposta.data) {
                setCookie("token", resposta.data.token, {
                    path: "/",
                });
                setMessage({
                    message: "Login realizado com sucesso.",
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
            <TitlePag text="Entrar" />
            <LoginForm buttonText="Login" enviaFormulario={enviaFormulario} />

            <div className="link">
                <Link to="/UnofficialNike/register">
                    Não está registrado? Junte-se a nós.
                </Link>
            </div>
        </div>
    );
}

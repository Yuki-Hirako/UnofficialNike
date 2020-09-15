import React from "react";
import Form from "../../components/form";
import Header from "../../components/header";
import TitlePag from "../../components/title";

export default function Login() {
    return (
        <div>
            <Header />
            <TitlePag text="Entrar" />
            <Form />
        </div>
    );
}

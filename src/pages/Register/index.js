import React from "react";
import Form from "../../components/form";
import Header from "../../components/header";
import TitlePag from "../../components/title";

export default function Register() {
    return (
        <div>
            <Header />
            <TitlePag text="Inscreva-se" />
            <Form />
        </div>
    );
}

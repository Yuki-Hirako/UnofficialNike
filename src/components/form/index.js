import React from "react";
import "./form.css";

function Form() {
    return (
        <>
            <div className="form-div">
                <div className="e-mail">
                    <input type="email" placeholder="Digite seu e-mail" />
                </div>
                <div className="senha">
                    <input type="password" placeholder="Senha" />
                </div>
            </div>
        </>
    );
}

export default Form;

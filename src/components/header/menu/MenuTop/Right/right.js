import React from "react";
import "./right.css";
import ChatIcon from "../../../../../assets/chaticon.png";
import Badge from "../../../../badge";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function RightSide() {
    let history = useHistory();
    function logout() {
        localStorage.removeItem("token");
        history.push("/projeto2-web/login");
    }
    return (
        <div>
            <ul className="list right-list">
                <li className="right-list-items">Acompanhar pedidos</li>
                <li className="right-list-items" onClick={() => logout()}>
                    Logout
                </li>
                <li className="right-list-items">Ajuda</li>
                <li className="right-list-items">
                    <span className="chat">
                        <img src={ChatIcon} alt="Chat" className="chat-icon" />
                        Chat Online
                    </span>
                </li>
                <li className="right-list-items">
                    <Badge />
                </li>
            </ul>
        </div>
    );
}

export default RightSide;

import React from "react";
import NikeIcon from "../../../../../assets/nike.svg";
import "./logo.css";
import { Link } from "react-router-dom";

function Logo() {
    return (
        <div className="NikeLogo">
            <Link to="/projeto2-web/">
                <img
                    src={NikeIcon}
                    alt="Nike Não-Oficial"
                    className="nike-icon"
                />
            </Link>
        </div>
    );
}

export default Logo;

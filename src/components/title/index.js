import React from "react";
import "./title-pag.css";

function TitlePag(props) {
    const { text } = props;
    return <div className="title-pag">{text}</div>;
}

export default TitlePag;

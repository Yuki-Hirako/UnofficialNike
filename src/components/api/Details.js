import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../header";
import "./App.css";

function Details() {
    let history = useHistory();
    const { id } = useParams();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    const getCharacter = async () => {
        const result = await axios(
            `https://rickandmortyapi.com/api/character/${id}`
        );

        setData(result.data);
        setLoading(false);
    };

    useEffect(() => {
        getCharacter();
    }, []);

    return loading ? (
        <Spinner />
    ) : (
        <>
            <Header />
            <div className="details">
                <img className="imgDetails" alt={data.image} src={data.image} />
                <div className="title-name">{data.name}</div>
                <div className="species">
                    Species: {data.species}{" "}
                    <span className="status">({data.status})</span>
                </div>
                <div className="location">Location: {data.location.name}</div>

                <div className="botao-back">
                    <button
                        className="button-back"
                        onClick={() => history.goBack()}
                    >
                        Voltar
                    </button>
                </div>
            </div>
        </>
    );
}

export default Details;

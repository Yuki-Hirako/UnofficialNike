import React from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import "./App.css";

function Search({ loading, data }) {
    if (loading) return <Spinner />;
    return (
        <div className="results-wrapper">
            <div className="results">
                <ul>
                    {data?.results?.map((item) => (
                        <li key={item.id}>
                            <Link to={`/projeto2-web/details/${item.id}`}>
                                <img alt={item.name} src={item.image} />
                                <span className="name"> {item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Search;

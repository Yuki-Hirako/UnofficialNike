import React, { useState, useContext } from "react";
import SearchIcon from "../../../../../assets/search.svg";

import { SearchContext } from "../../../../../pages/Home";

import "./second-item.css";

export const List = () => {
    return (
        <ul className="list">
            <li className="center-list-items">Lançamentos</li>
            <li className="center-list-items">Masculino</li>
            <li className="center-list-items">Feminino</li>
            <li className="center-list-items">Infantil</li>
            <li className="center-list-items">SNKRS</li>
            <li className="center-list-items">Air Max</li>
        </ul>
    );
};

export const Search = () => {
    const [searchData, setSearchData] = useState("");
    const setSearch = useContext(SearchContext);

    return (
        <div className="search">
            <button className="search-icon-div" type="submit">
                <img
                    src={SearchIcon}
                    alt="Buscar"
                    className="search-icon"
                    onClick={(e) => {
                        e.preventDefault();
                        setSearch(searchData);
                    }}
                />
            </button>
            <input
                type="text"
                placeholder="O que você procura?"
                value={searchData}
                onChange={(e) => {
                    e.preventDefault();
                    setSearchData(e.target.value);
                }}
            />
        </div>
    );
};

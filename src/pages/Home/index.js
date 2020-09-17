import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

import Conteudo from "../../components/Conteudo/conteudo";
import Search from "../../components/api/Search";

import "../../globalStyles.css";
import "../../components/api/App.css";
import Header from "../../components/header";

export const SearchContext = createContext(null);

function Home() {
    const [data, setData] = useState({});
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const searchCharacter = async () => {
            let queryString = "";
            const page = Math.floor(Math.random() * 19) + 1;

            if (search) {
                queryString = `?name=${search}`;
            } else {
                queryString = `?page=${page}`;
            }

            if (search) {
                setLoading(true);
                const result = await axios(
                    `https://rickandmortyapi.com/api/character/${queryString}`
                );

                setData(result.data);
                setLoading(false);
            }
        };

        searchCharacter();
    }, [search]);

    return (
        <>
            <SearchContext.Provider value={setSearch}>
                <Header />
                {search === "" ? <Conteudo /> : null}

                <Search loading={loading} data={data} />
            </SearchContext.Provider>
        </>
    );
}

export default Home;

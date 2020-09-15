import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import { Router, Link } from '@reach/router';

import Header from './components/header';
import Conteudo from './components/Conteudo/conteudo';
import Search from './components/api/Search';
import Details from './components/api/Details';

import './globalStyles.css';
import './components/api/App.css';

export const SearchContext = createContext(null)
import Pages from './routes/routes';

function App() {
  const [data, setData] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const searchCharacter = async () => {
      console.log('searching...');
      let queryString = '';
      const page = Math.floor(Math.random() * 19) + 1;

      if (search) {
        queryString = `?name=${search}`;
      } else {
        queryString = `?page=${page}`;
      }

      const result = await axios(
        `https://rickandmortyapi.com/api/character/${queryString}`,
      );

      setData(result.data);
      setLoading(false);
    };

    searchCharacter();
  }, [search]);

  return (
    <div>
      <SearchContext.Provider value={setSearch}>
        <Header />
        <Conteudo />
        <Search loading={loading} data={data} />
      </ SearchContext.Provider>
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/header';
import Conteudo from './components/Conteudo/conteudo';
import './globalStyles.css';

import {Router, Link} from '@reach/router';
import Search from './components/api/Search';
import Details from './components/api/Details';
import './components/api/App.css';

function App() {
  return (
    <div>
      <Header />
      <Conteudo/>
      <Search></Search>  
    </div>
  );
}

export default App;

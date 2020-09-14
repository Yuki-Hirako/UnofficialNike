import React from 'react';
import SearchIcon from '../../../../../assets/search.svg';
import './second-item.css';

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
  return (
    <div className="search">
      <div className="search-icon-div">
        <img src={SearchIcon} alt="Buscar" className="search-icon" />
      </div>
      <input type="text" placeholder="O que você procura?" />
    </div>
  );
};

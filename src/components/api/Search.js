import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Spinner from './Spinner';
import axios from 'axios';
import './App.css';

function Search({ loading, data }) {

    return loading ? (
        <Spinner />
    ) : (
            <div className="results-wrapper">
                <div className="results">
                    <ul>
                        {data.results.map(item => (
                            <li key={item.id}>
                                <Link to={`/details/${item.id}`}>
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
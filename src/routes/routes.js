import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/header';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function Pages(){
    return (
        <Router>
            <Switch>
                <Route exact path="/projeto2-web">
                    <Header />
                </Route>
                <Route exact path="/projeto2-web/login">
                    <Login />
                </Route>
                <Route exact path="/projeto2-web/register">
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}
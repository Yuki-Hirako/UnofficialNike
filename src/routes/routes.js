import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Details from "../components/api/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./privateRoute";

export default function Pages() {
    return (
        <Router>
            <Switch>
                <Route exact path="/UnofficialNike/login">
                    <Login />
                </Route>
                <Route exact path="/UnofficialNike/register">
                    <Register />
                </Route>
                <PrivateRoute exact path="/UnofficialNike" component={Home} />
                <PrivateRoute
                    exact
                    path="/UnofficialNike/details/:id"
                    component={Details}
                />
            </Switch>
        </Router>
    );
}

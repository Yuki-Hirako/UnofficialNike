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
                <Route exact path="/projeto2-web/login">
                    <Login />
                </Route>
                <Route exact path="/projeto2-web/register">
                    <Register />
                </Route>
                <PrivateRoute exact path="/projeto2-web" component={Home} />
                <PrivateRoute
                    exact
                    path="/projeto2-web/details/:id"
                    component={Details}
                />
            </Switch>
        </Router>
    );
}

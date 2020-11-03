import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

function PrivateRoute({ component: Component, ...rest }) {
    const [cookies, setCookie] = useCookies(["token"]);
    const isAuthenticated = async () => {
        axios.get(
            "https://projeto2-web-backend-wat.herokuapp.com/verifyToken",
            { withCredentials: true }
        );
    };

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/projeto2-web/login" />
                )
            }
        />
    );
}

export default PrivateRoute;

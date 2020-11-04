import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

function PrivateRoute({ component: Component, ...rest }) {
    const [cookies, setCookie] = useCookies(["token"]);
    const isAuthenticated = () => (cookies.token ? true : false);

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

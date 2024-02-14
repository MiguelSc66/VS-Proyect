import React from "react";
import { Route, redirect } from "react-router";

const PrivateRoute = ({ component: Component, isAdmin, ...rest }) => {
    return (
        <Route
        {...rest}
        render={(props) =>
            isAdmin ? <Component {...props} /> : <redirect to="/login" />
            }
        />
    )
}

export default PrivateRoute
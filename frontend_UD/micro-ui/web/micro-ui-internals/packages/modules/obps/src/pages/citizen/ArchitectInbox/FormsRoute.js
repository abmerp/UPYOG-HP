import React from "react";
import { Route, Redirect } from "react-router-dom";

const FormRoute = ({ path, component: Component }) => {
const userToken = Digit.UserService?.getUser()?.access_token;

return (
    <Route path={path} render={({ location }) =>userToken ? (<Component />) : (
        <Redirect
            to={{
            pathname: '/digit-ui/citizen/login',
            state: { from: location.pathname + location.search },
            }}
        />
        )
    }
    />
    );
};

export default FormRoute
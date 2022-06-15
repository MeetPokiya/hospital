import React from 'react';
import { Route } from 'react-router-dom'; 
import { isLogin } from '../Container';

function PublicRoute({ component: Component, restricted = false, ...rest }) {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <restricted to={"/"} />
                :
                <Component {...props} />

            )}

        />
    )

}

export default PublicRoute;
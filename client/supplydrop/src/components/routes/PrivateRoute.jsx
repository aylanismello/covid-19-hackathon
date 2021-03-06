import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest}) => {
    const {currUser} = useContext(AuthContext);

    return (
        <Route {...rest} 
        render={routeProps => 
            !!currUser ? 
            ( <RouteComponent {...routeProps} /> ) 
            : ( <Redirect to={'/login'} /> 
            )}
        />
    )
}

export default PrivateRoute;
import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "../../../services/auth.service";

interface Props {
    path: string;
    children: any;
}

const AuthRoute: React.FC<Props> = ({ path, children, ...rest }: Props) => {
    const isLoggedIn = AuthService.isLoggedIn();
    return (
        <Route
            path={path}
            {...rest}
            exact
            render={({ location }) =>
                !isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AuthRoute;

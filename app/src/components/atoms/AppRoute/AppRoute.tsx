import React from "react";
import { Redirect, Route } from "react-router-dom";

import AuthService from "../../../services/auth.service";

interface Props {
    path: string;
    exact?: boolean;
    children: React.ReactNode;
}

const AppRoute: React.FC<Props> = ({ path, children, ...rest }: Props) => {
    const isLoggedIn = AuthService.isLoggedIn();

    return (
        <Route
            path={path}
            render={({ location }) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
            {...rest}
        />
    );
};

export default AppRoute;

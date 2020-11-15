import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "../../../services/auth.service";

interface Props {
    path: string;
    children: any;
}

const AppRoute: React.FC<Props> = ({ path, children, ...rest }: Props) => {
    const isLoggedIn = AuthService.isLoggedIn();
    console.log(isLoggedIn);
    return (
        <Route
            path={path}
            {...rest}
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
        />
    );
};

export default AppRoute;

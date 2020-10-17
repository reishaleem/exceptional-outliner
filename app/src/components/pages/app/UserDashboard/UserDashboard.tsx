import React from "react";
import { Link, Redirect } from "react-router-dom";

import AuthService from "../../../../services/auth.service";
import AppWrapper from "../../../organisms/Wrappers/AppWrapper";

interface User {
    id: string;
    name: string;
    username: string;
}

export default () => {
    const currentUser: User = AuthService.getCurrentUser();
    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <AppWrapper>
            <h1>Test</h1>
        </AppWrapper>
    );
};

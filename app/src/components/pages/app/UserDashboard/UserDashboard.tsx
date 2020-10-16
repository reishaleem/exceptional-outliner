import React from "react";

import AuthService from "../../../../services/auth.service";

export default () => {
    return <h1>{AuthService.getCurrentUser().username}</h1>;
};

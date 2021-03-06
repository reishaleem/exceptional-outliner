import React from "react";
import HomePage from "./components/pages/public/HomePage/HomePage";

import "./App.css";
import "fontsource-roboto";
import AboutPage from "./components/pages/public/AboutPage/AboutPage";
import { Switch, Route } from "react-router-dom";
import FeaturesPage from "./components/pages/public/FeaturesPage/FeaturesPage";
import SignUp from "./components/pages/public/SignUp/SignUp";
import Login from "./components/pages/public/Login/Login";
import UserDashboard from "./components/pages/app/UserDashboard/UserDashboard";
import NewUniverse from "./components/pages/app/Universe/NewUniverse/NewUniverse";
import UserUniverseList from "./components/pages/app/UserUniverseList/UserUniverseList";
import UniverseDashboard from "./components/pages/app/Universe/Dashboard/UniverseDashboard";
import EditWiki from "./components/pages/app/Wiki/EditWiki/EditWiki";
import NewWiki from "./components/pages/app/Wiki/NewWiki/NewWiki";
import UniverseHomePage from "./components/pages/app/Explore/Universe/UniverseHomePage";

function App() {
    return (
        <div className="App">
            <Switch>
                {/* Public pages */}
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} exact />
                <Route path="/features" component={FeaturesPage} exact />
                <Route path="/register" component={SignUp} exact />
                <Route path="/login" component={Login} exact />

                {/* App pages */}
                <Route path="/app" component={UserDashboard} exact />
                <Route
                    path="/app/universes"
                    component={UserUniverseList}
                    exact
                />
                <Route
                    path="/app/universes/new"
                    component={NewUniverse}
                    exact
                />

                <Route path="/app/wikis/new" component={NewWiki} exact />
                <Route
                    path="/app/universes/:universeId/wikis/:wikiId/edit"
                    component={EditWiki}
                    exact
                />
                <Route
                    path="/app/universes/:universeId"
                    component={UniverseDashboard}
                    exact
                />

                <Route
                    path="/app/view/:universeId"
                    component={UniverseHomePage}
                    exact
                />
                <Route
                    path="/app/view/:universeId/:wikiId"
                    component={UniverseHomePage}
                    exact
                />
            </Switch>
        </div>
    );
}

export default App;

import React from "react";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import { Switch, Route } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/inventory" component={Inventory} />
            </Switch>
        </>
    );
};

export default Router;

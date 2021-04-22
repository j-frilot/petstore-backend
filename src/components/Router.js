import React from "react";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import About from "./pages/About";
import { Switch, Route } from "react-router-dom";

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/inventory" component={Inventory} />
                <Route exact path="/about" component={About} />
            </Switch>
        </>
    );
};

export default Router;

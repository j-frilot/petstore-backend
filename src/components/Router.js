import React from "react";
import Home from "./pages/home/Home";
import Inventory from "./pages/inventory/Inventory";
import About from "./pages/about/About";
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

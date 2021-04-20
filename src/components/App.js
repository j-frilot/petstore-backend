import React from "react";

import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Header />

            <Switch>
                <Route exact path="/" component={Home} />

                <Route exact path="/inventory" component={Inventory} />
            </Switch>

            <Footer />
        </>
    );
};

export default App;

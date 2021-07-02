import React from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Router from "./Router";
import InventoryContext from "./InventoryContext";
const App = () => {
    return (
        <>
            <Header />
            <InventoryContext>
                <Router />
            </InventoryContext>
            <Footer />
        </>
    );
};

export default App;

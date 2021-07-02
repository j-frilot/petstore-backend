import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

const InventoryContext = ({ children }) => {
    const [dogInfo, setDogInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4002/petstore/inventory")
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                setDogInfo(res);
            });
    }, []);

    return (
        <DataContext.Provider value={dogInfo}>{children}</DataContext.Provider>
    );
};

export default InventoryContext;

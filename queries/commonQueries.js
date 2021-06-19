const pool = require("../db/dbconfig");
const inventoryQueries = require("./inventoryQueries");

const commonQueries = {
    all: (res, table) => {
        pool.execute(`SELECT * FROM ${table}`, (error, results) => {
            if (!error) {
                console.log("Succes Query from 'allQuery'");
                if (results.length == 1) {
                    res.json(...results);
                    res.render(...results);
                } else {
                    res.json(results);
                }
            } else {
                console.log("Error in the 'allDogs' Query", error);
            }
        });
    }
};

module.exports = commonQueries;

const pool = require("../db/dbconfig");

const inventoryQueries = {
    table: "inventory",
    findByName: (res, table, name) => {
        pool.query(
            `SELECT * FROM inventory WHERE name = ?`,
            [name],
            (error, results) => {
                if (!error) {
                    console.log("Succes Query from 'name'");
                    if (results.length == 1) {
                        res.json(...results);
                        // res.render(...results);
                        console.log(...results);
                    } else {
                        res.json(results);
                    }
                } else {
                    console.log("Error in the 'name' Query", error);
                }
            }
        );
    }
};

module.exports = inventoryQueries;

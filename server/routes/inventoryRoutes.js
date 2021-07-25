const express = require("express");
const router = express.Router();
const db = require("../db/dbconfig");

// api/inventory  ALL DOGS
router.get("/", async (req, res) => {
    try {
        const findAllDogs = await db.query("SELECT * FROM inventory");
        res.json(findAllDogs.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// shows all info based on name    ${port}/api/inventory/[name]

// router.get("/", async (req, res) => {
//     try {
//         const findByName = await db.query(`SELECT * FROM inventory WHERE name = ?`),
//             [name];
//         res.json(findAllDogs.rows);
//     } catch (err) {
//         console.error(err.message);
//     }
// });

module.exports = router;

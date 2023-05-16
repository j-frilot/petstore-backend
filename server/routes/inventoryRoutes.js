const express = require('express');
const router = express.Router();
const db = require('../db/dbconfig');

// api/inventory  ALL DOGS
router.get('/', (req, res) => {
	db.query('SELECT * FROM inventory'),
		(err, results) => {
			if (!err) {
				res.send(results);
				console.log(results);
			} else {
				console.log('Error!!:', err);
			}
		};
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

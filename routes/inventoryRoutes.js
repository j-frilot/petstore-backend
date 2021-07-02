const express = require("express");
const router = express.Router();
const { inventoryQueries: query } = require("../queries/Query");

// inventory    ${port}/api/inventory
router.get("/", (req, res) => {
    query.findAll(res, query.table);
});

// shows all info based on name    ${port}/api/inventory/[name]
router.get("/:name", (req, res) => {
    query.findByName(res, query.table, req.params.name);
});

module.exports = router;

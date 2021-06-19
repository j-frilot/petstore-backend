const express = require("express");
const router = express.Router();
const { inventoryQueries: query } = require("../queries/Query");

// inventory    ${port}/api/inventory
router.get("/", (req, res) => {
    query.all(res, query.table);
});

module.exports = router;

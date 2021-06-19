const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 4000;

router.get("/", (req, res) => {
    res.json({
        "All Pets": `https://localhost:${PORT}/api/inventory`
    });
});

// original
router.use("/inventory", require("./routes/inventoryRoutes"));

module.exports = router;

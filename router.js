const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 4002;

//  FOR SERVER
router.get("/", (req, res) => {
    res.json({
        "All Pets": `https://petshop-josh.herokuapp.com/api/inventory`
    });
});

// original
router.use("/inventory", require("./routes/inventoryRoutes"));

module.exports = router;

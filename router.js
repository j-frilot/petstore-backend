const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 4000;

//   FOR LOCAL
router.get("/", (req, res) => {
    res.json({
        "All Pets": `http://localhost:${PORT}/api/inventory`
    });
});

//  FOR SERVER
// router.get("/", (req, res) => {
//     res.json({
//         "All Pets": `http://localhost:${PORT}/api/inventory`
//     });
// });

// original
router.use("/inventory", require("./routes/inventoryRoutes"));

module.exports = router;

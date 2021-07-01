const express = require("express");
const router = express.Router();
const PORT = process.env.PORT || 4002;

//   FOR LOCAL
router.get("/", (req, res) => {
    res.json({
        "All Pets": `http://localhost:${PORT}/petstore/inventory`
    });
});

//  FOR SERVER
// router.get("/", (req, res) => {
//     res.json({
//         "All Pets": `https://melloman.live/petstore/inventory`
//     });
// });

// original
router.use("/inventory", require("./routes/inventoryRoutes"));

module.exports = router;

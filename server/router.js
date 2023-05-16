const express = require('express');
const router = express.Router();
const PORT = process.env.PORT || 4000;

// original
router.use('/inventory', require('./routes/inventoryRoutes'));

module.exports = router;

const commonQueries = require("./commonQueries");

const inventoryQueries = {
    ...commonQueries,
    ...require("./inventoryQueries")
};

module.exports = {
    inventoryQueries
};

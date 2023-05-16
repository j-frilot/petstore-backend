// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'josh',
	database: 'petshop',
	password: 'PASSWORD',
});

// simple query
connection.query('SELECT * FROM `inventory`', function (err) {
	if (!err) {
		console.log('The petshop database connection was successful!!');
	}

	if (err) {
		console.log('There was an error connecting to petshop database.:', err);
	}
});

module.exports = connection;

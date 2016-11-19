const config = require('../config.json');
var db = null; 

var mysql = require('mysql2');

module.exports = {
	connectDB: function(callback) {
		db = mysql.createConnection({
			host: config.sql.host,
			user: config.sql.user,
			password: config.sql.password,
			database: config.sql.database
		});
	}
}
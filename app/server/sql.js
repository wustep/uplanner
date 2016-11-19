import mysql from 'mysql2'

const config = require('../config.json');
var db = null; 

module.exports = {
	connectDB: function(callback) {
		db = mysql.createConnection({
			host: config.sql.host,
			user: config.sql.user,
			pass: config.sql.password,
			database: config.sql.database
		});
	}
}
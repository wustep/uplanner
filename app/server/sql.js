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
	},
	getPreferences: function(user, callback) {
		db.query("SELECT * FROM `users_preferences` WHERE user_id = ?", [user], function(err, results) {
			if (err) { console.log(err); callback(true); return; }
			callback(false, results);
		});
	},
	getEvents: function(preferences, callback) {
		db.query("SELECT * FROM (SELECT * FROM events ORDER BY rand() LIMIT 50) T1 ORDER BY time_start ASC", function(err, results) {
			if (err) { console.log(err); callback(true); return; }
			callback(false, results);
		});
	},
	searchEvents: function(query, callback) { // probably a better way to repeat this
		var search = '%' + query.toLowerCase() + '%';
		db.query("SELECT * FROM events WHERE LOWER(`name`) LIKE ? OR LOWER(`location`) LIKE ? OR LOWER(`desc`) LIKE ? LIMIT 20", [search, search, search], function(err, results) {
			if (err) { console.log(err); callback(true); return; }
			callback(false, results);
		});
	},
	getBigTags: function(parentTag = 0, callback) {
		// Get big categories
		db.query("SELECT `bigtag_id`, bigtags.`tag_id`, `name` FROM `bigtags`, `tags` WHERE bigtags.`tag_id` = tags.`tag_id` AND bigtags.`parent_tag_id` = ? ORDER BY bigtags.`parent_tag_id` ASC, bigtags.`bigtag_id` ASC;", [parentTag], function (err, results) {
			if (err) { console.log(err); callback(true); return; }
			callback(false, results);
		});
	},
	getAllCategories: function() {
		
	},
	getTagChildren: function(tag) {
		
	},
	setTag: function(tag, weight) {
		
	},
	getPeopleTypes: function(callback) {
		db.query("SELECT `tag_id`, `name` FROM `tags` WHERE tag_id >= 100 AND tag_id <= 103", function (err, results) {
			if (err) { console.log(err); callback(true); return; }
			callback(false, results);
		});
	}
}
import mysql from 'mysql2';

var db = null; 

module.exports = {
	connectDB: function(stream, callback) {
		console.log("SQL: Trying connection")
		db = mysql.createConnection({
			host: process.env.sql_host,
			user: process.env.sql_user,
			password: process.env.sql_password,
			database: process.env.sql_database,
			stream: stream
		});
		db.connect(function(err) {
			if (err) {
				console.log("SQL: Error connecting: " + err.stack);
				return;
			}
			console.log("SQL: Connected as " + db.threadId);
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
	/* -- OLD Search Algorithim --
	searchEvents: function(query, callback) { 
		var search = '%' + query.toLowerCase() + '%';
		db.query("SELECT * FROM events WHERE LOWER(`name`) LIKE ? OR LOWER(`location`) LIKE ? OR LOWER(`desc`) LIKE ? LIMIT 40", [search, search, search], function(err, results) {
			if (err) { console.log(err); callback(true); return; }
			callback(false, results);
		});
	},*/
	searchEvents: function(query, callback) {
		db.query("SELECT * FROM events WHERE MATCH (`name`,`location`,`desc`) AGAINST (? IN NATURAL LANGUAGE MODE) LIMIT 40", [query], function(err, results) {
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
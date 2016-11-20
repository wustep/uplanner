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
		db.query("SELECT * FROM `user_tags`", function(err, results) {
			if (err) { console.log(err); callback(true); return; }
			callback(false, results);
		});
	},
	getEvents: function(preferences, callback) {
		db.query("SELECT * FROM `events` LIMIT 50", function(err, results) {
			if (err) { console.log(err); callback(true); return; }
			console.log("==getEvents==");
			console.log(results);
			console.log("==============");
			callback(false, results);
		});
	},
	getBigTags: function(parentTag = 0, callback) {
		// Get big categories
		db.query("SELECT `bigtag_id`, bigtags.`tag_id`, `name` FROM `bigtags`, `tags` WHERE bigtags.`tag_id` = tags.`tag_id` AND bigtags.`parent_tag_id` = ? ORDER BY bigtags.`parent_tag_id` ASC, bigtags.`bigtag_id` ASC;", ['parentTag'], function (err, results) {
			if (err) { console.log(err); callback(true); return; }
			console.log("==getBigTags==");
			console.log(results);
			console.log("==============");
			callback(false, results);
		});
	},
	getAllCategories: function() {
		
	},
	getTagChildren: function(tag) {
		
	},
	setTag: function(tag, weight) {
		
	}
	/*
	fetchCalendar: function(url, type, callback) {
		var result = "";
		switch (type) {
			type "teamup": {
				result = 
				break;
			}
			default: {
				result = "Error: "
				break;
			}
		}
		
	},
	
	convertTeamUpToSQL: function(json, callback) {
		
	}
	*/
}
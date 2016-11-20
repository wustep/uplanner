const express = require('express');
const router = express.Router();
const promise = require('bluebird'); // Not using promise rn
const config = require('../config');
//const cors = require('cors')
import sql from "./sql.js";

router.use(function(req, res, next) { // TODO Bad security probably, solve later.
	res.header("Access-Control-Allow-Origin", "http://localhost:3000");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Credentials", "true")
	next();
});

router.get('/', (req,res) => {
	res.send('Events API');
});

// Get all "largest" big tags for guests
router.get('/bigtags', (req,res) => {
	sql.getBigTags(0, function(err, results) {
		if (err) { res.send(500, "Server Error"); return; }
		res.send(results);
	});
});

// Get "big tags" children of parent
router.get('/bigtags/:parentid', (req, res) => {
	let {parentid} = req.params;
	if (!isNaN(parentid)) { // TODO Bad security check for int, improve later
		sql.getBigTags(parentid, function(err, results) {
			if (err) { res.send(500, "Server Error"); return; }
			res.send(results);
		});
	} else {
		res.send(500, "Server Error");
	}
});

// Get preferences of a user
router.get('/pref/:userid', (req, res) => {
	let {userid} = req.params;
	if (!isNaN(userid)) {
		sql.getPreferences(userid, function(err, results) {
			if (err) { res.send(500, "Server Error"); return; }
			res.send(results);
		});
	} else {
		res.send(500, "Server Error");
	}
});

// Get all events
router.get('/events', (req, res) => {
	sql.getEvents(null, function(err, results) {
		if (err) { res.send(500, "Server Error"); return; }
		res.send(results);
	});
});

// Get events based on preferences, use algorithim, TBD
router.get('/events/:prefs', (req, res) => {
	let {prefs} = req.params;
	console.log(prefs);
	sql.getEvents(null, function(err, results) {
		res.send(results);
	});
});

// Get types of people (student / etc.)
router.get('/people', (req, res) => {
	sql.getPeopleTypes(function(err, results) {
		res.send(results);
	});
});

module.exports = router;
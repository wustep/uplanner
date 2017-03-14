import sql from "./sql.js";
import apicache from 'apicache'

const express = require('express');
const router = express.Router();
let cache = apicache.middleware

router.use(function(req, res, next) { // TODO Bad security probably, solve later.
	const origin = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL_PROD : process.env.REACT_APP_URL_DEV; // TODO: Eventually upper-case all env vars
	res.header("Access-Control-Allow-Origin", origin); // TODO: Prob need to fix for Heroku, given that the url would just be the base.
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET');
	res.header("Access-Control-Allow-Credentials", "true")
	next();
});

router.get('/', cache('7 days'), (req,res) => {
	res.send('UPlanner Events API');
});

// Get all "largest" big tags for guests
router.get('/bigtags', cache('7 days'), (req,res) => {
	sql.getBigTags(0, function(err, results) {
		if (err) { console.log("SQL: Error: " + err); res.send(500, "Server Error"); return; }
		res.send(results);
	});
});

// Get "big tags" children of parent
router.get('/bigtags/:parentid', cache('7 days'), (req, res) => {
	let q = req.params;
	if (!isNaN(q["parentid"])) { // TODO Bad security check for int, improve later
		sql.getBigTags(q, function(err, results) {
			if (err) { console.log("SQL: Error: " + err); res.send(500, "Server Error"); return; }
			res.send(results);
		});
	} else {
		res.send(500, "Server Error");
	}
});

// Get preferences of a user
router.get('/pref/:userid', cache('30 minutes'), (req, res) => {
	let q = req.params;
	if (!isNaN(q["userid"])) {
		sql.getPreferences(q, function(err, results) {
			if (err) { console.log("SQL: Error: " + err); res.send(500, "Server Error"); return; }
			res.send(results);
		});
	} else {
		res.send(500, "Server Error");
	}
});

// Get all events
router.get('/events', cache('3 minutes'), (req, res) => {
	sql.getEvents(function(err, results) {
		if (err) { console.log("SQL: Error: " + err); res.send(500, "Server Error"); return; }
		res.send(results);
	});
});

// Get events based on search query
router.get('/events/:query', cache('10 minutes'), (req, res) => {
	let q = req.params;
	sql.searchEvents(q, function(err, results) {
		if (err) { console.log("SQL: Error: " + err); res.send(500, "Server Error"); return; }
		res.send(results);
	});
});

// Get events based on guests' tags
router.get('/guest-events/:tags', cache('10 minutes'), (req, res) => {
	let q = req.params;
	sql.getEventsForGuest(q, function(err, results) {
		if (err) { console.log("SQL: Error: " + err); res.send(500, "Server Error"); return; }
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
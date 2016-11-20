const express = require('express');
const router = express.Router();
const promise = require('bluebird'); // Not using promise rn
const config = require('../config');
import sql from "./sql.js";

router.get('/', (req,res) => {
	res.send('Events API');
});

router.get('/bigtags', (req,res) => {
	sql.getBigTags(0, function(err, results) {
		if (err) { res.send(500, "Server Error"); return; }
		res.send(results);
	});
});

router.get('/bigtags/:parentid', (req, res) => {
	let {parentid} = req.params;
	if (!isNaN(req.params.parentid)) { // TODO Bad security check for int, improve later
		sql.getBigTags(req.params.parentid, function(err, results) {
			if (err) { res.send(500, "Server Error"); return; }
			res.send(results);
		});
	} else {
		res.send(500, "Server Error");
	}
});

router.get('/events', (req, res) => {
	sql.getEvents(null, function(err, results) {
		if (err) { res.send(500, "Server Error"); return; }
		res.send(results);
	});
});

module.exports = router;
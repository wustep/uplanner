import express from 'express';
import path from 'path';
import sql from "./sql.js";
import config from '../config.json';

const app = express();

/* SSH2 tunnel wasn't working, using PuTTY instead, may need this stuff later though 

var Client = require('ssh2').Client;
var conn = new Client();

conn.on('ready', function() {
	console.log("SSH: ready");
	conn.forwardOut(config.ssh.srcHost, config.ssh.srcPort, config.ssh.dstHost, config.ssh.dstPort, function(err, stream) {
		if (err) throw err;
		console.log("SSH: Forwarded out successfully")
		sql.connectDB();
	});
}).connect({
	host: config.ssh.host,
	port: config.ssh.port,
	username: config.ssh.username,
	password: config.ssh.password
	
	// Alternate connection scheme
	//privateKey: require('fs').readFileSync(config.ssh.privateKey),
	//passphrase: config.ssh.passphrase
});
*/

app.set('port', (process.env.PORT || 3001));
sql.connectDB();
app.use('/api', require('./routes'));

if (process.env.NODE_ENV === 'production') { // Express only serves static assets in production
	app.use(express.static('../client/build'));
}

app.listen(app.get('port'), () => {
	console.log(`Server at: ${config.baseurl}:${app.get('port')}/`); // eslint-disable-line no-console
});
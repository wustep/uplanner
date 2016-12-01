import express from 'express';
import path from 'path';
import sql from "./sql.js";

const app = express();

var sshConfig = {
	username: process.env.ssh_username,
	password: process.env.ssh_password,
	host: process.env.ssh_host,
	port: process.env.ssh_port,
	dstPort: process.env.ssh_localPort,
	localHost: process.env.ssh_localHost,
	localPort: process.env.ssh_localPort,
	keepAlive: true
};

// TODO: Improve console logging as to when SQL / SSH connets properly or fails

const serverPort = (process.env.NODE_ENV === 'production') ? process.env.PORT : process.env.SERVER_PORT; // Default to client port for production, needed for Heroku
console.log(process.env.NODE_ENV + " " + process.env.PORT + " " + process.env.SERVER_PORT); // Debuggin

app.set('port', (serverPort || 3001)); // Default port to 3001, but is found in env
app.listen(app.get('port'), () => {
	console.log(`API: Server at: ${process.env.baseurl}:${app.get('port')}/api`); // eslint-disable-line no-console
});	

console.log(`API: NODE_ENV: ${process.env.NODE_ENV}`)

if (process.env.NODE_ENV === 'production') { // Express only serves static assets in production
	console.log('Server: Serving static assets in production');
	console.log(`Server: Client at: ${process.env.baseurl}:${app.get('port')}/`); // eslint-disable-line no-console
	app.use('/', express.static('././build'));
}

app.use('/api', require('./routes'));

app.get('*', function(req, res) {
	res.status(404).send('404 - Page not found - If this is a valid link, try again in a little bit!')
});


if (process.env.ssh_tunnel) {
	// Connect to SSH Tunnel for Namecheap's Remote MySQL
	console.log("SSH: Trying connection");
	var Client = require('ssh2').Client;
	var ssh = new Client();

	ssh.on('ready', function() {
		ssh.forwardOut(
		  process.env.ssh_host,
		  process.env.ssh_dstPort,
		  process.env.ssh_localHost,
		  process.env.ssh_localPort,
		  function (err, stream) {
			if (err) {
				console.log("SSH: Forwarding Error");
				throw err;
			}
			console.log("SSH: Forwarded Out");
			sql.connectDB(stream); // Connect to SQL here, passing in ssh connection
		  });
	}).connect(sshConfig);
} else {
	sql.connectDB();
}
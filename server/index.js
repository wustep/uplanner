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

//console.log(process.env.ssh_username + " " + process.env.ssh_localHost + " " + process.env.baseurl);

app.set('port', (process.env.server_port || 3001)); // Default port to 3001, but is found in env
app.listen(app.get('port'), () => {
	console.log(`API: Server at: ${process.env.baseurl}:${app.get('port')}/`); // eslint-disable-line no-console
});	
console.log("API: NODE_ENV = " + process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') { // Express only serves static assets in production
	console.log('API: Serving static assets in production');
	app.use(express.static('../build'));
}
app.use('/api', require('./routes'));


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
				console.log("SSH: Forwarding Error")
				throw err;
			}
			sql.connectDB(stream); // Connect to SQL here, passing in ssh connection
		  });
	}).connect(sshConfig);
} else {
	sql.connectDB();
}
import express from 'express';
import path from 'path';
import sql from "./sql.js";
import config from '../config.json';

const app = express();

var sshConfig = {
	username: config.ssh.username,
	password: config.ssh.password,
	host: config.ssh.host,
	port: config.ssh.port,
	dstPort: config.ssh.localPort,
	localHost: config.ssh.localHost,
	localPort: config.ssh.localPort,
	keepAlive: true
};

app.set('port', (process.env.PORT || 3001)); // TODO: Get the ports into config.json and let that file decide
app.listen(app.get('port'), () => {
	console.log(`API: Server at: ${config.baseurl}:${app.get('port')}/`); // eslint-disable-line no-console
});	
if (process.env.NODE_ENV === 'production') { // Express only serves static assets in production
	app.use(express.static('../client/build'));
}
app.use('/api', require('./routes'));


if (config.ssh.tunnel) {
	// Connect to SSH Tunnel for Namecheap's Remote MySQL
	console.log("SSH: Trying connection");
	var Client = require('ssh2').Client;
	var ssh = new Client();

	ssh.on('ready', function() {
		ssh.forwardOut(
		  config.ssh.host,
		  config.ssh.dstPort,
		  config.ssh.localHost,
		  config.ssh.localPort,
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
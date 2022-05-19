const fs = require('fs'); // it provides ways to manage files and directories with synchronous and asynchronous methods.

function read(route, cb) {
	fs.readFile(route, (err, data) => {
		cb(data.toString());
	});
}

function write(route, content, cb) {
	fs.writeFile(route, content, function (err) {
		if (err) {
			console.error('Error writing file', err);
		} else {
			console.log('Writed successfully :D');
		}
	});
}

function drop(route, cb) {
	fs.unlink(route, cb);
}

read(__dirname + '/example.txt', console.log);
write(__dirname + '/example2.txt', 'Hi! I am a new file :D', console.log);
drop(__dirname + '/example2.txt', console.log);

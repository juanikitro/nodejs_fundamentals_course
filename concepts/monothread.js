console.log('First intevention'); // This will be printed first

// This will be printed asynchronously after 1 second in its own thread
let i = 0;
setInterval(function () {
	console.log(i);
	i++;
}, 1000);

console.log('Second intevention'); // This will be printed second

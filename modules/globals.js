// console.log(global); // Print the global data and functions that we can use
// console.log(process) // Print the process data and functions that we can use

// It will help us in the server =
let i = 0;
var interval = setInterval(function () {
	console.log('Interval');
	if (i === 3) {
		clearInterval(interval);
	}
	i++;
}, 1000);

setTimeout(function () {
	console.log('Timeout');
}, 2000);

setImmediate(function () {
	console.log('Immediate');
});

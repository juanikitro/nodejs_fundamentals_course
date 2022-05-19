// The promises are a more elegant way to handle callbacks.
// Create a new promise instance and share the variable with the "resolve" for the other promise.
// One promise wait the previous one to start and use a variable.
// With .catch we can handle the errors.
function hi(name) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log('Hi ' + name);
			resolve('Pedro');
		}, 2500);
	});
}

function talk(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log(name + ': blablabla');
			resolve('Julian');
		}, 500);
	});
}

function bye(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Bye ' + name);
			resolve('Matias');
		}, 500);
	});
}

function finish(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('The last name was: ' + name);
		}, 500);
	});
}

console.log('start');
hi('Juan')
	.then(talk)
	.then(talk)
	.then(talk)
	.then(bye)
	.then(finish)
	.catch((error) => {
		console.log(error);
	});

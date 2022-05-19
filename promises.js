function hi(name) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log('Hi ' + name);
			resolve(name);
		}, 2500);
	});
}

function talk(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('blablabla');
			resolve(name);
		}, 500);
	});
}

function bye(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Bye ' + name);
			resolve(name);
		}, 500);
	});
}

console.log('start');
hi('Juan')
	.then(talk)
	.then(bye)
	.then(() => {
		console.log('finish');
	})
	.catch((error) => {
		console.log(error);
	});

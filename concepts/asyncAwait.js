async function hi(name) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			console.log('Hi ' + name);
			resolve('Pedro');
		}, 2500);
	});
}

async function talk(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log(name + ': blablabla');
			resolve('Julian');
		}, 500);
	});
}

async function bye(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function () {
			console.log('Bye ' + name);
			resolve('Matias');
		}, 500);
	});
}

// It will be an async function
async function main() {
	let name = await hi('Juani');
	await talk(name);
	await talk(name);
	await talk(name);
	await bye(name);
	console.log('Finish the function');
}

console.log('start');
main();
console.log('Finish');

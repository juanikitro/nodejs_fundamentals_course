function hi(name, myCallback) {
	setTimeout(function () {
		console.log('Hi ' + name);
		myCallback(name);
	}, 2000);
}

function talk(callbackTalk) {
	setTimeout(function () {
		console.log('blablabla');
		callbackTalk();
	}, 1000);
}

function bye(name, anotherCallback) {
	setTimeout(function () {
		console.log('Bye ' + name);
		anotherCallback();
	}, 1000);
}

function conversation(name, times, callback) {
	if (times > 0) {
		talk(function () {
			conversation(name, --times, callback);
		});
	} else {
		callback(name);
	}
}

hi('Juani', function (name) {
	conversation(name, 3, function () {
		console.log('proceso terminado');
	});
});

// hi('Juani', function (secondName) {
// 	talk(function () {
// 		talk(function () {
// 			bye(secondName, function () {
// 				console.log('Finishing');
// 			});
// 		});
// 	});
// });

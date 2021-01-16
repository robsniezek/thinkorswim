const fs = require('fs');

function pnt(input) {
	console.log(input);
}

function pKeys(input) {
	console.log(Object.keys(input));
}

// const content = fs.readFile('data-options-2.json');
// const json = JSON.parse(content);

// json.callExpDateMap.features.forEach(map => {});

fs.readFile('data-options-2.json', (err, data) => {
	if (err) throw err;
	const parsedData = JSON.parse(data);

	//RETURN DATA
	//console.log(parsedData);
	// console.log(Object.keys(parsedData));

	//RETURN STRATEGY
	// pnt(parsedData.strategy);

	// RETURN DATES
	expiryDates = parsedData.callExpDateMap;
	// pnt(expiryDates);
	// pKeys(expiryDates);

	//RETURN STRIKES
	const strikes = parsedData.callExpDateMap;
	pnt(strikes);
	// pnt(strikes);
	// console.log(Object.keys(parsedData.callExpDateMap));
});

// fs.readFile('data-options.json', (err, data) => {
// 	if (err) throw err;
// 	const parsedData = JSON.parse(data);

// 	//   console.log(parsedData);
// 	console.log(Object.keys(parsedData));
// 	// return expiration dates
// 	expiryDates = parsedData.callExpDateMap;
// 	// pnt(expiryDates);
// 	pKeys(expiryDates);

// 	// console.log(Object.keys(parsedData.callExpDateMap));
// });

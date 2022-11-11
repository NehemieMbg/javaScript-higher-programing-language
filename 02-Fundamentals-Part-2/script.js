'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


// Functions
// function logger() {
// 	console.log('My name is Jonas');
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
// 	console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// 	return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);


// Function Declaration vs. Expressions

// Function Declaration
// function calcAge1(birthYear) {
// 	return 2037 - birthYear;
// }
// const age1 = calcAge1(1999);

// // Function Expression
// const calcAge2 = function (birthYear) {
// 	return 2037 - birthYear;
// }
// const age2 = calcAge2(1991);

// console.log(age1, age2);


// 35.Arrow Function

// Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2037 - birthYear;
// 	const retirement = 65 - age;
// 	// return retirement
// 	return `${firstName} retires in ${retirement} years;`
// }

// console.log(yearsUntilRetirement(1991, 'Jonas'));
// console.log(yearsUntilRetirement(1980, 'Bob'));

// Reviewing function

// const calcAge = function(birthYear) {
// 	return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
// 	const age = calcAge(birthYear);
// 	const retirement = 65 - age;
// 	// return retirement
// 	// return `${firstName} retires in ${retirement};`
// }
// yearsUntilRetirement(1991, 'Jonas')

// Test 1
// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// let avgDolphins = calcAverage(85, 54, 41);
// let avgKoalas = calcAverage(23, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
// 	if (avgDolphins >= avgKoalas * 2) {
// 		return `Dolphins won (${avgDolphins} vs ${avgKoalas})`;
// 	} else if (avgDolphins * 2 <= avgKoalas) {
// 		return `Koalas won (${avgKoalas} vs ${avgDolphins})`;
// 	}
// 	return -1;
// }

// console.log(checkWinner(avgDolphins, avgKoalas));

// // Test 2
// avgDolphins = calcAverage(23, 44, 71);
// avgKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(avgDolphins, avgKoalas));

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(friends[1]);

// console.log(friends[friends.length - 1]);

// // Exercise
// const calcAge = function (birthYear) {
// 	return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]
// console.log(ages);


// 40. Basic Array Method

// // Array
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength); // Returns the length of the array

// friends.unshift('Jhon');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));

// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));

// if (friends.includes('Steven')) {
// 	console.log('You have a friend called Steven');
// }

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// const bills = [125, 555, 44];
// const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length - 1])]
// const total = [bills[0] + tip[0], bills[1] + tip[1], bills[bills.length - 1] + tip[tip.length - 1]]
// console.log(bills, tip, total);

// Objects

// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'James',
// 	age: 2037 - 1991,
// 	job: 'teacher',
// 	friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// // const inter = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// // if (jonas[inter]) {
// // 	console.log(jonas[inter]);
// // } else {
// // 	console.log('Wrong request! What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
// // }

// jonas.location = 'Paris';
// jonas['twitter'] = '@nemerys'
// console.log(jonas);

// // Challenge

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// const jonas = {
// 	firstName: 'Jonas',
// 	lastName: 'Schmedtmann',
// 	birthYear: 1991,
// 	job: 'teacher',
// 	friends: ['Michael', 'Peter', 'Steven'],
// 	hasDriversLicense: true,

	// calcAge: function(birthYear) {
	// 	return 2037 - birthYear;
	// }

	// calcAge: function() {
	// 	console.log(this);
	// 	return 2037 - this.birthYear;
	// }

// 	calcAge: function() {
// 		this.age = 2037 - this.birthYear;
// 		return this.age;
// 	},

// 	getSummary: function() {
// 		return `${this.firstName} is a ${this.calcAge()}-years old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
// 	}
// };

// jonas.calcAge();
// console.log(jonas.age);

// // Challenge
// console.log(jonas.getSummary());


/////////////////////////////////////////////////////////
// Coding Challenge 3

// const markMiller = {
// 	fullName: 'Mark Miller',
// 	height: 1.69,
// 	weight: 78,

// 	calcBMI: function() {
// 		this.bmi = this.weight / (this.height ** 2)
// 		return this.bmi
// 	}
// };

// const johnSmith = {
// 	fullName: 'John Smith',
// 	height: 1.95,
// 	weight: 92,

// 	calcBMI: function() {
// 		this.bmi = this.weight / (this.height ** 2)
// 		return this.bmi
// 	}
// };
// markMiller.calcBMI();
// johnSmith.calcBMI();

// console.log(`${markMiller.bmi > johnSmith.bmi? markMiller.fullName: johnSmith.fullName}'s BMI (${markMiller.bmi > johnSmith.bmi? markMiller.bmi : johnSmith.bmi}) is higher than ${markMiller.bmi < johnSmith.bmi? markMiller.fullName : johnSmith.fullName}'s (${markMiller.bmi < johnSmith.bmi? markMiller.bmi : johnSmith.bmi})!`);


// 46. Iteration: The for loop

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetitions ${rep}`);
// }

// const jonasArray = [
// 	'Jonas',
// 	'Schmedtmann',
// 	2037 - 1991,
// 	'teacher',
// 	['Michael', 'Peter', 'Steven']
// ];

// for (let i = 0; ; i++) {
// 	console.log(jonasArray[i]);
// }

// let dice = Math.trunc(Math.random() * 7);

// while (dice !== 6) {
// 	console.log(`You rolled a ${dice}`);
// 	dice = Math.trunc(Math.random() * 7);
// 	if (dice === 6) console.log('Loop is about to end...');
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tip = [];
// const total = [];

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// for (let i = 0; i < bills.length; i++) {
// 	tip.push(calcTip(bills[i]));
// 	total.push(tip[i] + bills[i]);
// }

// const calcAverage = function(arr) {
// 	let avg = 0;
// 	for (let i = 0; i < arr.length; i++) {
// 		avg += arr[i];
// 	}
// 	return avg / arr.length;
// }

// console.log(tip, bills, total);
// console.log(calcAverage(total));

const calcAge5 = year => 2022 - year;

console.log(calcAge5(1999));

console.log(`You have ${calcAge5(1999)} years old`)

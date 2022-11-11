// // Type conversion

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // converse the number to a string
// console.log(String(23));


// // Type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');


// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const favorite = Number(prompt('What is your favorite number?'));
// console.log(favorite);

// if (favorite === 23) { // 22 === 23 -> False!
// 	console.log('Cool! 23 is an amazing number!');
// } else if (favorite === 7) {
// 	console.log('7 is also a cool number');
// } else {
// 	console.log('Number is not 23 or 7');
// }


// // Logical operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
// 	console.log('Sarah is able to drive!');
// } else {
// 	console.log('Someone else should drive...');
// }

// const isTired = false; // C

// if (hasDriversLicense && hasGoodVision && !isTired) {
// 	console.log('Sarah is able to drive!');
// } else {
// 	console.log('Someone else should drive...');
// }


// The Switch statement

// const day = 'sunday';

// switch(day) {
// 	case 'monday': // day === 'monday'
// 		console.log('Plan course structure');
// 		console.log('Go to coding meetup');
// 		// break;
// 	case 'tuesday':
// 		console.log('Prepare theory videos');
// 		break;
// 	case 'wednesday':
// 	case 'thursday':
// 		console.log('Write code examples');
// 		break;
// 	case 'friday':
// 		console.log('Record videos');
// 		break;
// 	case 'saturday':
// 	case 'sunday':
// 		console.log('Enjoy the weekend :D');
// 		break;
// 	default:
// 		console.log('Not a valid day!');
// }

// const day = 'sunday';

// if (day === 'monday') {
// 	console.log('Plan course structure');
// 	console.log('Go to coding meetup');
// } else if (day === 'thursday') {
// 	console.log('Prepare theory videos');
// } else if (day === 'wednesday' || day === 'thursday') {
// 	console.log('Write code examples');
// } else if (day === 'friday') {
// 	console.log('Record videos');
// } else if (day === 'saturday' || day === 'sunday') {
// 		console.log('Enjoy the weekend :D');
// } else {
// 	console.log('Not a valid day!');
// }

// Conditional operator

// const age = 23;
// // age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 🍷')

// const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
// console.log(`I like to drink ${drink}`);

// console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

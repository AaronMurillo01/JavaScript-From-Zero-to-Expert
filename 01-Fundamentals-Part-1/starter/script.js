// let Js = "amazing";
// // console.log(40 + 24 - 10);

// console.log("Jonas");
// console.log("24");

// let firstName = "Matilda";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //Variable name conventions
// let jonas_matilda = "JM";
// let $function = 27;

// let Person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Programmer";
// let myCurrentJob = "Teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990;
// // const job;

// var job = "programmer";
// job = "teacher";

// lastName = "Schmedtmann";
// console.log(lastName);

// const ageAaron = 2037 - 1999;
// const ageSarah = 2037 - 2023;
// console.log(ageAaron, ageSarah);

// let setTimeout(() => {
//    ageAaron
//    else()

// }, timeout);

// //Math operators
// const now = 2037;
// const ageAaron = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageAaron, ageSarah);

// console.log(ageAaron * 2, ageAaron / 10, 2 ** 3)
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Aaron";
// const lastName = 'Murillo';
// console.log(firstName +' '+  lastName);

// //Assignment operators
// let x = 10 + 5; //15
// x +=10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--; // x + x - 1
// x--;
//  console.log(x);

// // Comparison operators
// console.log(ageAaron > ageSarah); //>, <, >=, <=
// console.log(ageSarah >= 18)

// const isFullAge = ageSarah >= 18;

// console.log(now - 1911 > now - 2018)

// const now = 2037;
// const ageAaron = now - 1991;
// const ageSarah = now - 2018;

// console.log (now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5;// x = y = 10, x = 10
// console.log(25 - 10 - 5);

// const averageAge = (ageAaron + ageSarah) / 2
// console.log (ageAaron, ageSarah, averageAge);

///////////////////////////////////////////////
// JavaScript Fundamentals – Part 1

// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn)
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = 'Aaron';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const aaron = "I'm " + firstName + ', a  ' + (year - birthYear) + 'year old' + job + '!';
// console.log(aaron);

// const aaronNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(aaronNew)

// console.log(`Just a regular string...`)

// console.log(`String with \n\
// multiple \n\
// lines`)

// console.log(`String
// multiple
// lines`)

// const age = 15;

// if(age >= 18) {
//     console.log ('Sarah can start driving license');
// } else {
//     const yearLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearLeft} years :)`);
// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

//The layout of the if/else statement
// if () {

// } else {

// }

// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉
// GOOD LUCK 😀

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn)
// console.log(BMIMark, BMIJohn)

// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})!`)
// }

//type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number (inputYear) + 18);

// console.log(Number('Aaron'))
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2')

// let n = '1' + 1; //'11'
// n = n - 1;
// console.log(n);

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Aaron"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 124;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }


// const age = 18;
// if(age === 18) console.log('You just became an adult :D');


// if(age == 18) console.log('You just became an adult :D (loose)');

// const favorite = Number (prompt("What's your favorite number"));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//     console.log('Cool! 23 is a amazing number!')
// } else if(favorite === 7) {
//     console.log('7 is also a cool number')
// } else if (favorite === 9) {
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7 or 9')
// }

// if (favorite !== 23) console.log('Why not 23?');

// const hasDriversLicense = true; // A B
// const hasGoodVision = true;// B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// // if(hasDriversLicense && hasGoodVision) {
// //     console.log('Sarah is able to drive!');
// // } else {
// //     console.log('Someone else should drive...');
// // }

// const isTired = false; //c
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }



// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score).

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK 😀

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3; 
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy')
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy')
// } else if (scoreDolphins===scoreKoalas) {
//     console.log('Both win the trophy!')
// }

// Bonus 1
const scoreDolphins = (97 + 112 + 81) / 3;
const scoreKoalas = (109 + 95 + 106) / 3; 
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy')
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy')
} else if (scoreDolphins===scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!')
} else {
    console.log('No one wins the trophy')
}
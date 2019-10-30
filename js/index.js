//string is a serie of characters
console.log(`hello world`);
console.log(`1`+`2`);
//Number is a number
console.log(123);
console.log(3 + 5); //add
console.log(3 - 5); // subtract
console.log(3 * 5); //multiply
console.log(3 / 5); //divide
console.log(3 % 5); //modulus
console.log(3 ** 5); //power/exponent

let bgcolor = `grey`; // same as in css like --bgcolor: grey; color: var(--bgcolor);

//Declaring variables, giving them starting values
let customerName = `George`; //class name $ -
let bitCoin = 0;
//Hi george, your balance is: 0
console.log (`Hi ${customerName}, Your balance is: 💰${bitCoin}`);

//assigning a new value to a variable

bitCoin = bitCoin + 4; 
console.log (`Hi ${customerName}, Your balance is: 💰${bitCoin}`);
//Hi george, your balance is: 4

bitCoin = bitCoin - 1;
console.log (`Hi ${customerName}, Your balance is: 💰${bitCoin}`);
//Hi george, your balance is: 3


//EXERCISE 1: The Fortune Teller
//Why pay a fortune teller when you can just program your fortune yourself? Store the following into variables: job title, geographic location, annual salary, company name. Output your fortune to the screen like so: "You will be a X in Y, making $N for Z."

let name = `Mehrnoush`;
let jobTitle = `an Interactive designer`;
let geolocation = `Toronto`;
let salary = `$150,000`;
let companyName = `Google`;
console.log (`${name} will be ${jobTitle} in ${geolocation}, making ${salary} for ${companyName}`);

//EXERCISE 2: The Age Calculator
//Forgot how old someone is? Calculate it! Store the current year in a variable. Store their birth year in a variable. Calculate their age based on the stored values. Output them to the screen like so: "They are NN years old.", substituting the values.

let birthYear = 1990;
let currentYear = 2019;
let age = 0;
age = currentYear - birthYear;
console.log (`They are ${age} years old.`);

//EXERCISE 3: The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more! Store your current age into a variable. Store a maximum age into a variable. Store an estimated amount per day (as a number). Calculate how many you would eat total for the rest of your life. Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
let currentAge = 29;
let maxAge = 70;
let perDay = 5;
let yearsIhave = maxAge - currentAge;
let lifeSupply = yearsIhave * perDay;
console.log (`You will need ${lifeSupply} to last you until the ripe old age of ${maxAge}.`);

//EXERCISE 4: The Geometrizer
//Calculate properties of a circle, using the definitions here. Store a radius into a variable. Calculate the circumference based on the radius, and output "The circumference is NN". Calculate the area based on the radius, and output "The area is NN".

let circleRadius = 5;

let circumference = 2 * 3.14 * circleRadius;
console.log (`The circumference is ${circumference}`);

let circleArea = 3.14 * (circleRadius**2);
console.log (`The area is ${circleArea}`);


//EXERCISE 5: The Temperature Converter
//It's hot out! Let's make a converter based on the steps here. Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".  Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C."

let celsiusTemp = 30;
let fahrenheit = (celsiusTemp * 1.8) + 32;
console.log (`${celsiusTemp} is ${fahrenheit}`);

// Artihmetic operator
let a = 7;
let b = 3;
let addtion = a + b;
let subtration = a - b;
let multiply = a * b;
let division = a / b;
let modulus = a % b;
let exponentiation = a ** b;
console.log(addtion);
console.log(subtration);
console.log(multiply);
console.log(division);
console.log(modulus);
console.log(exponentiation);
console.log(addtion, subtration, multiply, division, modulus, exponentiation);

// Unary Operators
let preIncre = 3;
preIncre = ++preIncre;
console.log(preIncre);

let postIncre = 4;
postIncre = postIncre++;
console.log(postIncre);

let preDecre = 7;
preDecre = --preDecre;
console.log(preDecre);

let postDecre = 5;
postDecre = postDecre--;
console.log(postDecre);

// Assignment operators
console.log("Assignment operator");
let x = 4;
let y = 3;
x += y;
console.log(x);

x -= y;
console.log(x);

x *= y;
console.log(x);

x /= y;
console.log(x);

x %= y;
console.log(x);

x **= y;
console.log(x);

//Comparison operators x=1 y=3
console.log("Comparison operators");
console.log(x == y);
console.log(x === y);
console.log(x < y);
console.log(x > y);
console.log(x <= y);
console.log(x >= y);
console.log(x != y);
console.log(x !== y);

console.log("String comparison:");
let textOne = "a";
let textTwo = "A";
console.log(textOne == textTwo);
console.log(textOne < textTwo);


console.log("Adding string and numbers:");
let text1 = "Hello";
let number1 = 5;
console.log(text1 + number1);

console.log("Ternary operators:");
let age = 22;
let vote = (age < 18) ? "You cannot vote" : "You can vote";
console.log(vote);

// Logical Operators
console.log("Logical Operators:");
console.log(true && true);
console.log(true && false);
console.log(true || false);
console.log(false || false);
console.log(!false);
console.log(!true);

// Bitwise operator
console.log("Bitwise operator");
console.log(5 & 1);
console.log(5 | 1);
console.log(~6);
console.log(4 ^ 5);
console.log("Left shift:", 3 << 4);
console.log("Right Shift:", 4 >> 2);




let intergerNumber = 10;
console.log(intergerNumber);

let floatPointNumber = 5.5;
console.log(floatPointNumber);

let singleQuoteString = 'Hello World';
console.log(singleQuoteString);

let doubleQuoteString = "Hello World";
console.log(doubleQuoteString);

let text = `World`;
let templateLitrealString = `Hello, ${text}`;
console.log(templateLitrealString);

let multiLineString = "This is first line\nThis is second line";
console.log(multiLineString);

let firstName = "Sarita";
let lastName = "Yadav";
let fullName = firstName + " " + lastName;
console.log(fullName);

console.table([intergerNumber, floatPointNumber, singleQuoteString, doubleQuoteString]);

let isJavaScriptFun = true;
let isTired = false;
console.log(isJavaScriptFun);
console.log(isTired);

let accountNominee;
console.log(accountNominee);

let branchAddress = null;
console.log(branchAddress);

let firstId = Symbol('id');
let secondId = Symbol('id');
console.log(firstId === secondId);

let firstNum = Symbol('123');
let secondNum = Symbol('123');
console.log(firstNum === secondNum);

let bigInteger = BigInt(243244445252113);
console.log(bigInteger);

let otherBigInterger = 2423534643721215367458568645342768;
console.log(otherBigInterger);

let person = {
    name: "Sarita",
    surname: "Yadav",
    age: 20,
};
console.log(person.name);
console.log("Hello, my name is " + person.name + " " + person.surname + ", my age is " + person.age);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers[3]);
console.log(numbers);

let fruits = ["Apple", "Banana"];
console.log(fruits);

let mixedArray = ["Jaipur", 56, false, [1, 2, 3, [4, 5, 6]], {name:"Sarita"}];
console.log(mixedArray[3][1]);
console.log(mixedArray[3][3][0]);
console.log(mixedArray[4]);

let currentDate = new Date();
console.log(currentDate);
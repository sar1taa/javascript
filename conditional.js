// if statement 
let vote = 4;
if (vote < 18) {
    console.log("You can't vote");
}

// if - else statement 
let age = 19;
if (age < 18) {
    console.log("Minor");
}
else {
    console.log("Major");
}

// else - if statement 
let number = 3;
if (number == 1) {
    console.log("A");
}
else if (number == 2) {
    console.log("B");
}
else if (number == 3) {
    console.log("C");
}
else if (number == 4) {
    console.log("D");
}
else {
    console.log("E");
}

//nested if else 
let marks = 95;
if (marks > 40) {
    if (marks < 50) {
        console.log("D");
    }
    else if (marks < 60) {
        console.log("C");
    }
    else if (marks < 70) {
        console.log("B");
    }
    else if (marks < 80) {
        console.log("A");
    }
    else {
        console.log("A++");
    }
}
else {
    console.log("Fail");
}

// Switch case 
let day = 9;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Doesn't exist");
        break;
}
console.log("For loop");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let j = 5; j > 0; j--) {
    console.log(j);
}

// break
console.log("break");
for (let a = 1; a <= 10; a++) {
    if (a == 4)
        break;
    else
        console.log(a);
}

// continue
console.log("Continue");
for (let b = 1; b <= 5; b++) {
    if (b == 4)
        continue;
    else
        console.log(b);
}
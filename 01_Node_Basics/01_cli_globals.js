const amount = 2;
// console.log(`${amount < 12}? small number : large number`);
console.log(((amount < 10) ? +"Small number" : "Large number"));
if (amount < 10) {
    console.log('Small number');
} else {
    console.log("Big number");
}

console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log('Hello every');
}, 1000);

// setTimeout(() => {
//     console.log('Hello after 2 seconds');
// }, 2000);
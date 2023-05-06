let fs = require('fs');
let input = fs.readFileSync('./PMMD').toString().split('\n');

a = Number(input[0].split(' ')[0]);
b = Number(input[0].split(' ')[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
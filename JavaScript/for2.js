let fs = require('fs');
let input = fs.readFileSync('./for2').toString().split('\n');

let n = Number(input[0]);

console.log(n*(n+1) / 2);
let fs = require('fs');
let input = fs.readFileSync('./AXB').toString().split('\n');

let line = input[0].split(' ');

let a = line[0].split(" ");
let b = line[1].split(" ");

console.log(a*b);
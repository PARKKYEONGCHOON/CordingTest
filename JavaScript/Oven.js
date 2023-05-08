let fs = require('fs');
let input = fs.readFileSync('./Oven').toString().split('\n');

let a = Number(input[0].split(' ')[0]);
console.log(a);
let b = Number(input[0].split(' ')[1]);
let c = Number(input[1]);

let totalMinute = a * 60 + b + c;
console.log(totalMinute);
totalMinute %= 1440;
let hour = parseInt(totalMinute / 60);
let min = totalMinute % 60;

console.log(hour + " " + min);
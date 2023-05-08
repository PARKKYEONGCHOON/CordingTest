let fs = require('fs');
let input = fs.readFileSync('./average2').toString().split('\n');

let n = Number(input[0]);
let scores = input[1].split(' ').map(Number);

let max = scores.reduce((a,b) => Math.max(a,b));
let updated = [];

for (let i = 0; i< n; i++) {
    updated.push(scores[i] / max * 100);
}

console.log(updated.reduce((a,b) => a + b) / n);
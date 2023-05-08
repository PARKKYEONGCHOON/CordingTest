let fs = require('fs');
let input = fs.readFileSync('./for').toString().split('\n');

let data = Number(input[0]);
console.log(data);
let result = 0

for(let i = 1; i <= data; i++) {
    result += i;
}

console.log(result);

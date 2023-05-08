let fs = require('fs');
let input = fs.readFileSync('./moduler').toString().split('\n');

let data = input.map(Number);
let mySet = new Set();

for(let i = 0; i< 10; i++){
    mySet.add(data[i] % 42);
}

console.log(mySet);
console.log(mySet.size);
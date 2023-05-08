let fs = require('fs');
let input = fs.readFileSync('./max').toString().split('\n');

let maxidx = 0;
let max = 0;

for(let i = 0; i < 9; i++) {
    let data = Number(input[i]);

    if(max < data) {
        max = data;
        maxidx = i;
    }
}

console.log(max);
console.log(maxidx + 1);
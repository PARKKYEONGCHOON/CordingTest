let fs = require('fs');
let input = fs.readFileSync('./star1').toString().split('\n');

n = Number(input[0]);

result = "";

for(let i = 0; i< n; i++) {

    for(let j = 0; j <= i; j++){
        result += "*";
    }

    result += "\n";
}

console.log(result);

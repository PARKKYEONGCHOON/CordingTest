let fs = require('fs');
let input = fs.readFileSync('./average').toString().split('\n');

let n = Number(input[0]);

for (let t = 1; t<= n; t++) {
    let data = input[t].split(' ').map(Number);
    let n = data[0];
    let summary = 0;

    for(let i = 1; i <=n; i++) {
        summary += data[i];
    }

    let average = summary / n;
    let cnt = 0;
    for (let i = 1; i<= n; i++){
        if (data[i] > average) cnt += 1;
    }

    console.log(`${(cnt / n * 100).toFixed(3)}%`)
}
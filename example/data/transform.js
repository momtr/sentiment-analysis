/**
 * This script transforms the tab-separated file into a JSON file
 */

let words = [];
let lookup = {};

const fs = require('fs');
fs.readFile('./AFINN-111.txt', 'utf8', (err, data) => {
    if(err) throw err;
    let at = data.split('\n');
    at.forEach((val, i) => {
        let split = val.split('\t');
        let word = split[0];
        let score = parseInt(split[1]);
        words.push(word);
        lookup[word] = score;
    });
    let fileContent = JSON.stringify({ words, lookup });
    fs.writeFile('../../lib/AFINN-111.json', fileContent, err => {
        if(err) throw err;
    });
});
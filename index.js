/**
 * Example (using SentimentAnalysis module)
 */

const SentimentAnalysis = require('./lib/sentimentAnalysis.js');
const analyzer = new SentimentAnalysis('./lib/AFINN-111.json');

/** with strings */
let scoreString = analyzer.getScore('happy bored hahahah');
console.log(scoreString);

/** with files */
let scoreFile = analyzer.scoreFile('example.txt');
console.log(scoreFile);

// EPISODE 2
const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log('episode 2:',verdict);
// Prediction: It will come up as an error as the 'const murderer' can not be changed.
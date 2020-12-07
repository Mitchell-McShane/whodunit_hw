// EPISODE 9
let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log('episode 9:', verdict);
// Prediction: The murderer is 'Professor Plum'. 
// Since both are prefixed with the "let" keyword. The declareMurderer function only has access to the "let murderer" function. as the if statement is never read.
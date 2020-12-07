// EPISODE 3
let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);
// Prediction: The first murderer is: 'Mrs Peacock'. As the "let" variable will be overwritten within the scope.
// Prediction: The second murderer is: 'Professor Plum', The "let" variable will be put back in the scope. 
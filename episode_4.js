// EPISODE 4
let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);
// Prediction: The three suspects are 'Miss Scarlet', 'Professor Plum', and 'Colonel Mustard'. As he was replaced with Mrs. Peacock.
// Prediction: Suspect three is: 'Mrs. Peacock'. as her function does not change as she is an annoymous function.
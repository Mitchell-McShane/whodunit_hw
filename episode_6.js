// EPISODE 6
let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log('episode 6:', verdict);
// Prediction: The murderer is 'Mrs White' calling the change murderer will first to go 'Mr Green'. But with the plotTwist const function that will be called and changed to 'Mrs White'.
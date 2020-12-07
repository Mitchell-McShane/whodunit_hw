// EPISODE 7
let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log('episode 7:',verdict);
// Prediction: The murderer is: 'Mrs Green' the top-level murderer will change once. As the plotTwist is still in the "let" keyword. and the unexpectedOutcome will only change the scope of what is in plotTwist.
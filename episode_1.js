// EPISODE 1
const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
  const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log('episode 1:', verdict);
// prediction: The murderer is: 'Miss Scarlet' her name is the only property in the string.
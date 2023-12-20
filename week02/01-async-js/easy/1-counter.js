//## Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second.

//with the below code counter will never stop by own, we have to abort the programm to stop it

// let counter = 0;

// function incrementCounter() {
//   counter++;
//   console.log(counter);
// }

// setInterval(incrementCounter, 1000);

// Modifying the the code such that counter will go till n counts evey and will automatically stop after n second.
//concept to be used - use clearInterval()

let counter = 0;

function incrementCounter() {
  counter++;
  console.log(counter);
}

let counterID = setInterval(incrementCounter, 1000);

setTimeout(() => {
  clearInterval(counterID);
  console.log("The counter is stopped after 30 seconds.");
}, 30000);

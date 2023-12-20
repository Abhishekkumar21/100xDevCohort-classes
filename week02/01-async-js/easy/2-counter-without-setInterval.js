// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let counter = 0;
let counterStopFlAG = false;

function incrementCounter() {
  if (!counterStopFlAG) {
    counter++;
    console.log(counter);
    //Schedule the incrementCounter function to be called again after 1 second
    setTimeout(incrementCounter, 1000);
  }
}

incrementCounter();

//To stop the counter after n seconds..
setTimeout(() => {
  counterStopFlAG = true;
  console.log("Counter stopped after 10 seconds.");
}, 10000);

// Reading the contents of a file

// Write code to read contents of a file and print it to the console.
// You can use the fs library to as a black box, the goal is to understand async tasks.
// Try to do an expensive operation below the file read and see how it affects the output.
// Make the expensive operation more and more expensive and see how it affects the ou
// ===============================================================================================

// const fs = require("fs");

// function readFileAndPrint(fileName) {
//   fs.readFile(fileName, "utf-8", (err, data) => {
//     if (err) {
//       console.error(`Error while reading the file : ${err.message}`);
//     } else {
//       console.log(data);
//     }
//   });
// }

// const filePath = "D:\\Learning\\100xDev\\week-2\\02-nodejs\\files\\a.txt";
// readFileAndPrint(filePath);

// To make above operation more expensive , I will create a more time taking async operation that will affect the overall execution and completion of async task

const fs = require("fs");

function readFileAndPrint(fileName) {
  fs.readFile(fileName, "utf-8", (err, data) => {
    if (err) {
      console.error(`Error while reading the file : ${err.message}`);
    } else {
      console.log(data);
    }
  });
  // calling created asynchronous function : expensiveAction
  expensiveAction();
}

//creating an asynchronous fn expensiveAction()
function expensiveAction() {
  console.log("Starting the expensive operation...");

  setTimeout(() => {
    console.log("Expensive operation ended.");
  }, 10000);
}

const filePath = "D:\\Learning\\100xDev\\week-2\\02-nodejs\\files\\a.txt";
readFileAndPrint(filePath);

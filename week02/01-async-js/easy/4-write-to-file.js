// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

function writeToFile(filePath, data) {
  fs.writeFile(filePath, data, (err) => {
    //.writeFile : Asynchronously writes data to a file, replacing the file if it already exists.
    if (err) {
      console.err(`Error while writing to file : ${err.message}`);
    } else {
      console.log(
        "Writing to file is successful. GO and check your content in file."
      );
    }
  });
}

const filePath = "test.txt";
const data = "Hi,there! Now I am in test.txt file.";

writeToFile(filePath, data);

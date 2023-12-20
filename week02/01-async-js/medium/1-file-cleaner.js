const fs = require("fs");

function readFileAndWriteBackToFile(filename) {
  fs.readFile(filename, "utf-8", function (err, fileData) {
    if (err) {
      console.log(`Error while reading the file : ${err.message}`);
    } else {
      //removing the extra space from the file data
      const modifiedFileData = fileData.replace(/\s+/g, " ");
      // writing back to the file, with modified file data
      fs.writeFile(filename, modifiedFileData, function (err) {
        if (err) {
          console.log(`Error while writing to the file : ${err.message}`);
        } else {
          console.log("Writing to file is successful");
        }
      });
    }
  });
}

const filename = "b.txt";
readFileAndWriteBackToFile(filename);

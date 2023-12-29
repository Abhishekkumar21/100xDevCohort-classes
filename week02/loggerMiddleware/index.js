// creating a server-side application having a middleware that will log the timestamp, method and URL of each
//incoming request being sent to server,
// in a txt file inside a subdirectory of root project directory

require("dotenv").config();

const express = require("express");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const PORT = process.env.PORT || 3000;
const app = express();

//configuring the logfilepath from root project dir
const logFilePath = path.join(__dirname, "/data/logResult.txt");

//fetching the directory path name in which logFile is , and checking the directory if it exists if not then
//creating the directory with name- logFileDirectory

const logFileDirectory = path.dirname(logFilePath);
if (!fs.existsSync(logFileDirectory)) {
  fs.mkdirSync(logFileDirectory, { recursive: true });
}

//promifying the fs.appendFile function to get its equivalent function that returns a promise, so that it can be handled easily
const appendFileAsync = promisify(fs.appendFile);

//middleware
app.use(async (req, res, next) => {
  const incomingReqTimestamp = new Date().toISOString();
  const incomingReqMethodName = req.method;
  const inomingReqURL = req.url;
  const fileData = `${incomingReqTimestamp} | ${incomingReqMethodName} | ${inomingReqURL}\n`;

  try {
    await appendFileAsync(logFilePath, fileData);
    next();
  } catch (error) {
    console.log(`Error while writing to file : ${logFilePath}`);
    next(error);
  }
});

//routes
app.get("/home", (req, res) => {
  res.send("Hi,there! Welcome to the Home page.");
});

app.post("/postroute", (req, res) => {
  res.send("I am from post route");
});

//starting the server
app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});

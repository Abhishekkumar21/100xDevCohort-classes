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

const logFilePath = path.join(__dirname, "/data/logResult.txt");

const logFileDirectory = path.dirname(logFilePath);
if (!fs.existsSync(logFileDirectory)) {
  fs.mkdirSync(logFileDirectory, { recursive: true });
}

const appendFileAsync = promisify(fs.appendFile);

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

app.get("/home", (req, res) => {
  res.send("Hi,there! Welcome to the Home page.");
});

app.post("/postroute", (req, res) => {
  res.send("I am from post route");
});

app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});

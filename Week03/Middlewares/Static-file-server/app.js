// Middlewares - Practice
//Using Middlewares only , creating a static file server that servers files from a directory

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

//using middlewares at application-level(flow - Top to down in order)
app.use(Logger);
app.use(staticFilesSender);
app.use(errorHandler);

//creating Middlewares

//Middleware-1
function Logger(req, res, next) {
  console.log("In comes request: " + req.url + " received on " + new Date());
  next();
}
//Middleware-2
function staticFilesSender(req, res, next) {
  const filePath = path.join(__dirname, "static", req.url);
  fs.stat(filePath, function (err, fileInfo) {
    if (err) {
      next();
      return;
    }
    if (fileInfo.isFile()) {
      res.sendFile(filePath);
    } else {
      next();
    }
  });
}
//Middleware-3
function errorHandler(req, res) {
  // removed 'next' function arg because it will not be used in this middleware as this one is last middleware function
  res.status(404).send("File does not found!");
}

app.listen(3000, function () {
  console.log("Server is listening at port : 3000");
});

//Instead of creating and using the middlewares in seperate syntax ,we can do this in together like-
// app.use(function(req, res, next){.....})
//app.use(function(req, res, next){......})
//app.use(function(req, res){.........})

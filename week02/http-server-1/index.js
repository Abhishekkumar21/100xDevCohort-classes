//npm init -y -
//npm install express - to istall express in my Local

const express = require("express"); //importing Express.js library - let ypu

//creating and exposing an http server
const app = express();
// const port = 3000;
const port = process.env.PORT || 3000; // to export an port from current env. do export PORT = {your port number} interminal

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//adding a Post request
app.post("/post-api", function (res, res) {
  console.log(
    "Hello, this is POSTrequest handler. A new POST request is being handled"
  );
  //you can implement machine learning thingy here
  //res.send("This is a post request from the client.");
  res.json({
    output: "2+2 = 4",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//npm init -y -
//npm install express - to istall express in my Local

const express = require("express"); //importing Express.js library - it lets you to create an http server by wrapping the core Node.js http server module
                                    // or you can say it provides a high-level abstraction to develops, over the top of low level Node.js HTTP server module, to create and configure the http server, without waorrying about the complexity of http server implementation

//creating and exposing an http server

const app = express();
  // const port = 3000;
const port = process.env.PORT || 3000; // to export an port from current env. do export PORT = {your port number} interminal

//Define routes
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

// Starting the server(exposing the server) 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// ***Points to Remember***

// To create the http server, we basically call the listen() method on the express app instance
// app.listen()-> starts the server and make it listen at specified port.
// Under the hood , app.listen creates an HTTP server using the core Node.js 'http' module that looks like:
                        // const http = require('http');
                        // const server = http.createServer(app);

                        // server.listen(port, () => {
                        //   console.log(`Server listening at http://localhost:${port}`);
                        // });


// Devs Main task:
  //Define routes
  // Define Middleware, and other settings etc

// Flow : 
// Step-1 : create express app instance 
// Step-2 : Define routes for root URL('/') and others things like Middleware ans all.
// Step-3 : call the listen method on the express app instance, to create the http server and make it listen at specified port
const express = require("express");

const app = express();
const port = 3001;

function sum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
}

app.get("/", function (req, res) {
  const n = req.query.n; // To catch query parameter n in my code, sent in the http request (htttp://localhost:3001/?n=10)
  const ans = sum(n);
  res.send(`hi your ans is ${ans}`);
});

app.listen(port, function () {
  console.log(`Your app is listening at port : ${port}`);
});

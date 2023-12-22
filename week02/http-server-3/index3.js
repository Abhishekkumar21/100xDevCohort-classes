//Learn by doing, lets create an in-memory Hospital

//You need to create 4 routes (4 things that the hospital can do):
//1. GET - user can check how many kidneys they have and their health
//2. POST - User can add a new kidney
//3. PUT - User can replace a kidney, make it healthy
//4. DELETE - User can remove a kidney
/********************************************************************************************************************************************* */

const express = require("express");
const app = express();
const port = 3003;

const users = [
  {
    name: "Jon",
    kidneys: [{ healthy: false }],
  },
];

app.use(express.json()); // To handle : TypeError: Cannot read properties of undefined (reading 'isHealthy' in post body request)

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys; //[{healthy : false}, {healthy : true} ]
  const numberOfKidneys = johnKidneys.length;

  let numberOfhealthyKidneys = johnKidneys.filter(function (kidney) {
    return kidney.healthy === true;
  }).length;
  let numberOfUnhealthyKidney = numberOfKidneys - numberOfhealthyKidneys;

  res.json({
    numberOfKidneys,
    numberOfhealthyKidneys,
    numberOfUnhealthyKidney,
  });
});

//whenever the patient will come, they will tell that i want a healthy kidney or unhealthy kidney
// another popular input type when you are sending a post request is -  req.body ; usually you send data in body
//what do you mean by body : body is nothing but it is also a place to specify the input data

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy; // to extract the value of the isHealthy property from the request body (req.body)

  users[0].kidneys.push({ healthy: isHealthy });
  res.json({
    msg: "Kidney Added!",
  });
});

//replacing(updating) an unhealthy kidney with healthy kidney
app.put("/", function (req, res) {
  if (isTheirAtleastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      users[0].kidneys[i].healthy = true;
    }

    res.json({
      msg: "unhealthy kidney replaced.",
    });
  } else {
    res.json({ msg: "You already have healthy kidneys" });
  }
});

//removing all the unhealthy kidneys
app.delete("/", function (req, res) {
  const newKidneys = [];
  if (isTheirAtleastOneUnhealthyKidney()) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.json({ msg: "Cannot remove : No kidney was present" });
  }
});

function isTheirAtleastOneUnhealthyKidney() {
  let atleastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) atleastOneUnhealthyKidney = true;
  }
  return atleastOneUnhealthyKidney;
}

app.listen(port);

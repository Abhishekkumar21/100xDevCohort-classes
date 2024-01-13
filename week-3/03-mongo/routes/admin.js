const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  //check if user with this username and password already exists in the dadatabase
  Admin.findOne({
    username: username,
    password: password,
  }).then((user) => {
    if (user) {
      res.json({ msg: `admin already exists.` });
    } else {
      //creating admin account if admin already doesn't exist.
      Admin.create({
        username: username,
        password: password,
      }).then((admin) => {
        res.json({ message: "admin created successfully" });
      });
    }
  });
});

//router for creating new course:
router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;
  //zod can be Implement for the input validation
  Course.create({
    title,
    description,
    price,
    imageLink,
  }).then((newCourse) => {
    res.json({ msg: "New Course Created!", courseId: newCourse._id });
  });
});

//router for fetching all courses detail
router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find()
    .then((courses) => {
      res.status(200).json({ courses });
    })
    .catch((error) => {
      console.log("Error while fetching the courses", error);
      res.status(500).json({ errMsg: "Internal Server Error" });
    });
});

module.exports = router;

const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  //checking if the user already exists with given username & password, if not- creating new user account
  const existingUser = await User.findOne({
    username: username,
    password: password,
  });
  if (!existingUser) {
    const createNewUser = await User.create({
      username: username,
      password: password,
    });
    res.json({ msg: "new user created!" });
  } else {
    res.json({ msg: "user already exists!" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const courseList = await Course.find({});
  if (courseList) {
    res.json({ courseList });
  } else {
    console.log("Erro while fetching the courses");
    res.json("msg: Internal Server Error");
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const c_id = req.params.courseId;
  const username = req.headers.username;

  try {
    await User.updateOne(
      { username: username },
      { $push: { purchasedCourses: c_id } }
    );
    res.json({ msg: "Purchase completed !" });
  } catch (err) {
    console.error("Error while purchasing the course", err);
    res.json({ msg: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers.username,
  });

  console.log(user.purchasedCourses);
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;

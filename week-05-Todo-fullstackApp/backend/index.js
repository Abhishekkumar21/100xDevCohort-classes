const express = require("express");
const { createTodoSchema, updateTodoSchema } = require("./types");
const { todo } = require("./db");
const PORT = 8081;
const app = express();

app.use(express.json());

app.post("/addTodos", async function (req, res) {
  const createPayload = req.body;
  //zod input validation
  const parsedPayload = createTodoSchema.safeParse(createPayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  // put it in mongodb

  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({ msg: "Todo created" });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({ todos });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  //input validation using zod library
  const parsedPayload = updateTodoSchema.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.send(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }

  await todo.update(
    {
      _id: req.body.id,
    },
    { completed: true }
  );
  res.json({
    msg: "Todo marked as completed",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});

// write basic express boilderplate code,
// with express.json

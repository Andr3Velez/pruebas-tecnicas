const express = require("express");
const data = require("./assets/data.js");

const PORT = process.env.PORT ?? 3000;
let app = express();
app.use(express.json());

app.use((req, res, next) => {
  let { auth } = req.headers;

  if (auth) {
    if (auth === "authorized") {
      next();
    } else {
      return res.status(401).json({ message: "not authorized" });
    }
  }
});

app.get("/exercise", (req, res) => {
  res.send(data);
});

app.get("/exercise/:id", (req, res) => {
  let { id } = req.params;

  let foundIndex = data.findIndex((item) => item.id === Number(id));
  if (foundIndex !== -1) {
    //el 0 es considerado como false

    return res.send(data[foundIndex]);
  }
  res.status(404).send({ message: "Item not found" });
});

app.post("/exercise", (req, res) => {
  let { exercise } = req.body;

  let newId = data.length + 1;

  let newItem = {
    id: newId,
    exercise,
  };
  data.push(newItem);
  res.send(data);
});

app.patch("/exercise/:id", (req, res) => {
  let { id } = req.params;
  let { newExercise } = req.body;

  let foundIndex = data.findIndex((item) => item.id === Number(id));

  if (foundIndex) {
    data[foundIndex] = {
      ...data[foundIndex],
      exercise: newExercise,
    };
  }

  res.send(data[foundIndex]);
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

import express from "express";

export const app = express();

app.use(express.json());
let items = [
  {
    id: 1,
    content: "Item 1",
  },
  {
    id: 2,
    content: "Item 2",
  },
  {
    id: 3,
    content: "Item 3",
  },
];

app.get("/items", (req, res) => {
  return res.json(items);
});
app.get("/items/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let findIndex = items.findIndex((item) => item.id === Number(id));

  return res.json(items[findIndex]);
});
app.post("/items", (req, res) => {
  let { content } = req.body;
  let newId = items.length + 1;
  items.push({
    id: newId,
    content,
  });

  return res.json(items);
});
app.put("/items/:id", (req, res) => {
  let { id } = req.params;
  let { content } = req.body;
  let indexItem = items.findIndex((item) => item.id === Number(id));

  console.log(indexItem);
  items[indexItem].content = content;

  return res.json(items[indexItem]);
});
app.delete("/items/:id", (req, res) => {
  let { id } = req.params;
  let newArray = items.filter((item) => item.id !== Number(id));

  return res.json(newArray);
});

app.listen(3000, () => {
  console.log(`Escuchando en: http://localhost:3000`);
});

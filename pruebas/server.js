// -API REST básica con Nodejs
const http = require("node:http");
const PORT = process.env.PORT ?? 3000;
let tasks = [
  {
    id: 1,
    task: "conseguir trabajo",
  },
  {
    id: 2,
    task: "conseguir trabajo que pague bien",
  },
  {
    id: 3,
    task: "conseguir trabajo que sea remoto",
  },
];

const configProcess = (req, res) => {
  let { method, url } = req;
  let body = "";

  switch (method) {
    case "GET": {
      switch (url) {
        case "/tasks": {
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          res.write(JSON.stringify(tasks));
          res.end();
          break;
        }
        default:
          break;
      }
    }
    case "POST": {
      switch (url) {
        case "/tasks": {
          req.on("data", (chunk) => {
            body += chunk;
          });
          req.on("end", () => {
            let { task } = JSON.parse(body);
            let newId = tasks.length + 1;

            res.setHeader("Content-Type", "application/json; charset=utf-8");
            let newItem = {
              id: newId,
              task,
            };
            tasks.push(newItem);
            res.write(JSON.stringify(tasks));
            res.end();
          });
        }
        default:
          break;
      }
    }
    default:
      break;
  }
};

let server = http.createServer(configProcess);

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});

//Implementa una función readFileAsync con Promises.

const fs = require("node:fs");
const path = require("node:path");
const { promisify } = require("node:util");

const textPath = path.join(__dirname, "assets", "text.txt");

function read(textPath, callback) {
  let txt = fs.readFileSync(textPath, "utf-8");
  return txt;
}

let readFileAsync = promisify(read);

readFileAsync(textPath)
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));

// 6. Vamos a crear nuestra propia utilidad `dotenv` en el archivo `dotenv.js`.

// - La utilidad debe devolver un método `config` que lee el archivo `.env` y añade las variables de entorno que haya en el archivo al objeto `process.env`.

// - Por ejemplo si tu archivo `.env` contiene:

// ```sh
// PORT=8080
// TOKEN="123abc"
// ```

// Entonces podríamos hacer esto:

// ```javascript
// const dotenv = require("./dotenv.js");
// dotenv.config()

// console.log(process.env.PORT) // "8008"
// console.log(process.env.TOKEN) // "123abc"
// ```

// También se le puede pasar el path del archivo `.env` como parámetro:

// ```javascript
// const dotenv = require("./dotenv.js");
// dotenv.config("./config/.env.local")
// ```

// Cosas a tener en cuenta:

// - Sólo se permite usar el módulo `fs` para leer el archivo.
// - Si el archivo no existe, no debe dar error, simplemente no hace nada.
// - Si el archivo existe, pero no tiene ninguna variable de entorno, no debe hacer nada.
// - Sólo debe soportar el archivo `.env` o el que se le pasa como parametro, no hace falta que soporte `.env.local`, `.env.development` y similares de forma automática.
// - Las variables de entorno siempre son strings, por lo que si en el archivo `.env` hay un número, por ejemplo `PORT=8080`, al leerlo con `fs` y añadirlo a `process.env` debe ser un string, no un número.
// - `process.env` es un objeto y, por lo tanto, es mutable. Esto significa que podemos añadir propiedades nuevas sin problemas.

import fs from "node:fs";

export function config({ path = ".env" } = {}) {
  let archivo = fs.readFileSync(path, "utf8");
  let lineas = archivo.split("\n");

  lineas.forEach((linea) => {
    const [key, ...value] = linea.split("=");
    let joinedValue = value.join("=");

    let valueToStore = joinedValue.startsWith('"') && joinedValue.endsWith('"');

    let cleanValue = valueToStore ? joinedValue.slice(1, -1) : joinedValue;

    process.env[key] = cleanValue;
  });
}
config();
console.log(process.env.PORT);
console.log(process.env.TOKEN);

// 1 - Arregla esta función para que el código posterior funcione como se espera:

import net from "node:net";
import fsp from "node:fs/promises";

export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    callback(null, { time: process.hrtime(startTime), ip });
  });

  client.on("error", (err) => {
    client.end();
    callback(err);
  });
};

ping("midu.dev", (err, info) => {
  if (err) console.error(err);
  else console.log(info);
});

// 2 - Transforma la siguiente función para que funcione con promesas en lugar de callbacks:

export function obtenerDatosPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "datos importantes" });
    }, 2000);
  });
}

// 3)
// Explica qué hace la funcion.
// Identifica y corrige los errores en el siguiente código.
// Si ves algo innecesario, elimínalo.
// Luego mejoralo para que siga funcionando con callback.
// Luego haz lo que consideres para mejorar su legibilidad.

export function procesarArchivo(callback) {
  fs.readFile("input.txt", "utf8", (error, contenido) => {
    if (error) {
      console.error("Error leyendo archivo:", error.message);
      callback(error);
    }

    setTimeout(() => {
      const textoProcesado = contenido.toUpperCase(); // hace que todo sea mayúscula

      fs.writeFile("output.txt", textoProcesado, (error) => {
        // crea un nuevo documento
        if (error) {
          console.error("Error guardando archivo:", error.message);
          callback(error);
        }

        console.log("Archivo procesado y guardado con éxito");
        callback(null);
      });
    }, 1000);
  });
}

export async function procesarArchivo() {
  let contenido = await fsp.readFile("input.txt", "utf8");
  let textoProcesado = contenido.toUpperCase(); // hace que todo sea mayúscula
  await fsp.writeFile("output.txt", textoProcesado);
}

//1 - Arregla esta función para que el código posterior funcione como se espera:

import net from "node:net";
import fs from "fs:net";
import fsp from "fs:net/promises";

export const ping = (ip, callback) => {
  const startTime = process.hrtime();

  const client = net.connect({ port: 80, host: ip }, () => {
    client.end();
    callback(null, { time: process.hrtime(startTime), ip });
    return "";
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

//2 - Transforma la siguiente función para que funcione con promesas en lugar de callbacks:

export function obtenerDatosPromise() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

// 3 - Explica qué hace la funcion.✅
// Identifica y corrige los errores en el siguiente código.
// Si ves algo innecesario, elimínalo.
// Luego mejoralo para que siga funcionando con callback y luego haz lo que consideres para mejorar su legibilidad.

export async function procesarArchivo() {
  const contenido = await fsp.readFile("input.txt", "utf8");
  const textoProcesado = contenido.toUpperCase();
  await fsp.writeFile("output.txt", textoProcesado);
}

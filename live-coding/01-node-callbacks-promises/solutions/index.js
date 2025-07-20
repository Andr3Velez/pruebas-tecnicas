import net from "node:net";
import fs from "node:fs";
import fsp from "node:fs/promises";

//1 - Arregla esta función para que el código posterior funcione como se espera:

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

// 4 - ¿Cómo mejorarías el siguiente código y por qué? Arregla los tests si es necesario:

export async function leerArchivos() {
  const [archivo1, archivo2, archivo3] = await Promise.allSettled([
    fsp.readFile("../archivo1.txt", "utf8"),
    fsp.readFile("../archivo2.txt", "utf8"),
    fsp.readFile("../archivo3.txt", "utf8"),
  ]);

  return `${archivo1.value} ${archivo2.value} ${archivo3.value}`;
}

const sol = await leerArchivos();
console.log(sol);

// 5 - Escribe una funcion `delay` que retorne una promesa que se resuelva después de `n` milisegundos. Por ejemplo:

export async function delay(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

delay(3000).then(() => console.log("Hola mundo"));
// o..
await delay(3000);
console.log("Hola mundo");

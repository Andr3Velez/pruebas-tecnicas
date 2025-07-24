//  Arregla esta función checkPortOpen para que devuelva una promesa correcta
// Requerido:

// Debe retornar una Promesa que se resuelva con { host, port, ms } o se rechace con el error correspondiente.
// Maneja correctamente timeout.
// Asegúrate de que siempre se limpia el socket (destroy).

// file: alt_solutions/network.js
import net from "node:net";

export function checkPortOpen(host, port = 80, timeoutMs = 2000, callback) {
  const start = process.hrtime.bigint();
  return new Promise((res, rej) => {
    res({
      host,
      port,
      ms: Number(process.hrtime.bigint() - start) / 1e6,
    });
    rej((error) => console.log(error.message));
    socket.destroy();
  });
}

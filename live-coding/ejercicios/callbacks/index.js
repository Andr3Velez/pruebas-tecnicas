// Función sumarAsync(a, b, callback)
// Crea una función que, tras 500 ms, invoque callback(null, a+b). Si alguno no es número, invoca callback(new Error('a y b deben ser números')).

function sumarAsync(a, b, callback) {
  setTimeout(() => {
    if (typeof a === "Number" && typeof b === Number) {
      callback(null, a + b);
    } else {
      callback(new Error("a y b deben ser números"));
    }
  }, 500);
}
sumarAsync(a, b, () => {
  console.log("resultado:");
});

// mapAsync(arr, fn, callback)
// Simula un map asíncrono: recibe un array y una función fn(item, cb). Aplica fn a cada elemento en serie y devuelve por callback el array transformado o el primer error.

// Lectura de múltiples archivos
// Usa fs.readFile con callbacks para leer tres archivos (a.txt, b.txt, c.txt) en paralelo y, cuando todos terminen, unir sus contenidos y mostrar el resultado. Maneja errores correctamente.

// Eliminar duplicados en un array
// Implementa uniqueAsync(arr, callback) que tras 300 ms retorna por callback un array sin duplicados. Usa un objeto o Set internamente.

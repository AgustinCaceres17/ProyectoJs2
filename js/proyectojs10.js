const filas = parseInt(prompt("Ingrese el numero de filas"));
const columnas = parseInt(prompt("Ingrese un numero de columnas"));
let resultado = filas * columnas;

console.log(filas);
console.log(columnas);

document.write(`<table>
    <tbody>`);

for (let inidiceFila = 0; inidiceFila < filas; inidiceFila++) {
  document.write(`<tr>`);
  for (let indiceColumna = 0; indiceColumna < columnas; indiceColumna++) {
    document.write(`<td>${resultado}</td>`);
    resultado--;
  }
  document.write(`</tr>`);
}

document.write(`
    </tbody>
    </table>`);

let numeroDni = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

while (confirm("Calcule el valor de la letra de un número de DNI")) {
  let dniIngresado = prompt("Ingrese el Numero");
  if (isNaN(dniIngresado) == true) {
    alert("No se ha ingresado un numero");
  } 
  else if (dniIngresado > 99999999 || dniIngresado < 0) {
    alert("Numero Invalido");
  }
  else {
    let indiceDni = dniIngresado % 23
    alert("La letra que corresponde al dni ingresado es " + numeroDni[indiceDni])
  }
}

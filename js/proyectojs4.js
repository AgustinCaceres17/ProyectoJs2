let numeroTotal=0

while(confirm("¿Quiere sumar un Numero?")){
    let numeroIngresado = parseInt(prompt("Ingrese su Numero"))
    numeroTotal = numeroTotal + numeroIngresado
    console.log(numeroIngresado)
    console.log(numeroTotal)
}
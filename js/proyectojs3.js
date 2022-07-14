let fraseCompleta=""

while(confirm("¿Desea Ingresar una Palabra?")){
    let textoIngresado = prompt("ingrese una palabra")
    fraseCompleta = fraseCompleta + " - " + textoIngresado
    console.log(textoIngresado)
    console.log(fraseCompleta)
}

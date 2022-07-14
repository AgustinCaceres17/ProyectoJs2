 let nota = parseInt(prompt("escriba la nota de 0 a 10"));

// Forma 1
if(nota > 10){
    alert("Numero Erroneo");
}
else if(nota < 0){
    alert("Introduce un numero valido");
}
else{
    if (nota <= 2){
        alert("Muy deficiente");
    }
    else if(nota <= 4){
        alert("Deficiente");
    }
    else if(nota <= 6){
        alert("Suficiente");
    }
    else if(nota == 7){
        alert("Bien");
    }
    else if(nota <= 9){
        alert("Notable");
    }
    else{
        alert("Sobresaliente");
    }
}



//Forma 2
// if(nota <=10 && nota >=0){
//     if (nota <= 2){
//         alert("Muy deficiente");
//     }
//     else if(nota <= 4){
//         alert("Deficiente");
//     }
//     else if(nota <= 6){
//         alert("Suficiente");
//     }
//     else if(nota == 7){
//         alert("Bien");
//     }
//     else if(nota <= 9){
//         alert("Notable");
//     }
//     else{
//         alert("Sobresaliente");
//     }
// }
// else if(nota>10){
//     alert("Numero invalido");
// }
// else {
//     alert("Introduce un numero valido");
// }
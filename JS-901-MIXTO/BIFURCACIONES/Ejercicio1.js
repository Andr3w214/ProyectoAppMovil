/*Ejercico 1 realizar un programa que muestre una letra de acuerdo a la calificación obtenida. Si el alumno saco de 90 a 100 debe de mostrar la letra A. 
de 80 a 89 debe mostrar la letra B, si el alumno saco de 70 a 79 mostrara la letra C, de 60 a 69 la letra D, y si no se encuentra en este rango la letra F
*/

let calificacion = 100; // aqui se puede anotar la cantidad que se logro

if (calificacion >= 90 && calificacion <= 100) {
    console.log("Letra A");
} else if (calificacion >= 80 && calificacion <= 89) {
    console.log("Letra B");
} else if (calificacion >= 70 && calificacion <= 79) {
    console.log("Letra C");
} else if (calificacion >= 60 && calificacion <= 69) {
    console.log("Letra D");
} else {
    console.log("Letra F");
}

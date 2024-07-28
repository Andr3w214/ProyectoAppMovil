/* realizar un programa que realice operaciones basicas matematicas segun el operador proporcionado suma resta multiplicacion y division, declarar una variante en 0 para que marque cero y mandar a imprimir el resultado.
*/

let num1 = 10;
let num2 = 5;
let operador = '/'; // aqui se puede anotar el operador que se desea realizar

switch (operador) {
    case '+':
        console.log(num1 + num2);
        break;
    case '-':
        console.log(num1 - num2);
        break;
    case '*':
        console.log(num1 * num2);
        break;
    case '/':
        if (num2 === 0) {
            console.log("No se puede dividir por cero");
        } else {
            console.log(num1 / num2);
        }
        break;
    default:
        console.log("Operador no válido");
}
/* realizar un programa que muestre los días de la semana de acuerdo a los números del 1 al 7 (lunes = 1, martes = 2, miércoles = 3, ...,  domingo = 7)
*/

let dia = 1; // aqui se puede anotar el número de la semana.

switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Día no válido");
}
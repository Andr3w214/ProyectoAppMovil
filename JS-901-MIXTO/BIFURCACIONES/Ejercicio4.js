/* realizar un programa que calcule el precio final de una compra con descuento y agrega impuestos. aquí se calcula el precio de 0 a 599 no aplica de 600 a 999 el 5%, de 1000 a 1999 el 10% descuento de 2000 en adelante el 15% una ves sacado el total se calcula el IVA y se suma 16%iva 
*/

const precioInicial = 100;

let precioFinal = precioInicial;

if (precioInicial >= 0 && precioInicial <= 599) {
    console.log("No aplica");
} else if (precioInicial >= 600 && precioInicial <= 999) {
    precioFinal -= (precioInicial * 0.06);
    console.log("Usted tiene un descuento del 5%");
} else if (precioInicial >= 1000 && precioInicial <= 1999) {
    precioFinal -= (precioInicial * 0.10);
    console.log("Usted tiene un descuento del 10%");
} else if (precioInicial >= 2000) {
    precioFinal -= (precioInicial * 0.15);
    console.log("Usted tiene un descuento del 15%");
}
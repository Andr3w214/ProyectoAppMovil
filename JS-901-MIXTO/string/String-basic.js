//String (cadena de caracteres)

let str_1 = "hola soy un texto con comillas";
let str_2 = 'Hola soy un texto con comillas';
let str_3 = "Comillas \"dentro\" de comillas";
let str_4 = 'Comillas "dentro" de comillas";';
let str_5 = "Comillas 'dentro' de comillas";

console.log(str_1);
console.log(str_2);
console.log(str_3);
console.log(str_4);
console.log(str_5);

//Comillas invertidas `` (bacticks)

let str_6 = `Comillas invertidas Backticks`;
console.log(str_6);

//Me sirve para ingresar valores de una variable en otra variable

let nombre = "Andres Bermudez";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

//HTML
let plantilla_html = `
<html>
    <h1>Página web de $(nombre)</h1>
</html>
`

console.log(plantilla_html);
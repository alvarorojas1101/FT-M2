//! Let - Const -> Se definen en el scope, tienen alcance de bloque
/* var nombre = "Feli";
let edad = 40;
let email = "email@email.com";
email = email + "/";
if (true) {
  var nombre = "Daniel";
  let edad = 26;
  console.log(edad);
  const string = "hola";
  // string = "chao" -> No se puede
  console.log(string);
}
console.log(nombre);
console.log(edad);

const saludo = function () {
  return "hola";
};
const amigosPersona1 = ["Pedro", "Jose", "Ana"];
amigosPersona1.push("Milena");
console.log(amigosPersona1);
amigosPersona1.shift();
amigosPersona1.shift();
amigosPersona1.shift();
console.log(amigosPersona1); */
//! Arrow Funcion -> Funcion flecha -> retorna por defecto
//? Notacion de funcion
/* const promedio = function (a, b, c, d, e) {
  let suma = a + b + c + d + e;
  console.log(suma);
  return suma / 5;
};
console.log(promedio(1, 2, 3, 4, 5)); */
//? Notacion arrow
/* const avg = (a, b, c, d, e) => (a + b + c + d + e) / 5;
console.log(avg(1, 2, 3, 4, 5)); */
//
//* Otro ejemplo
//? Notacion Funcional
const arr = [1, 2, 3, 4, 5];
/* function iterar(array) {
    return array.filter(function (elem, index) {
        return elem % 2 === 0
     })
} 
console.log(iterar(arr));
*/
//? Notacion Arrow mejora 1
/* function iterar(array) {
  return array.filter((elem) => elem % 2 === 0)
} 
console.log(iterar(arr));
*/
//? Notacion Arrow mejora 2
/* const iterar = (array) => array.filter((elem) => elem % 2 === 0);
console.log(iterar(arr)); */

//! Ternarios -> ? :
//? Condicional IF
/* function saludarIdioma(idioma) {
    if (idioma === "es") {
        return "Hola"
    } else if (idioma === "en") {
        return "Hello"
    } else if (idioma === "man") {
        return "Ni hao"
    } else {
        return "✌️"
    }
} */
// console.log(saludarIdioma("man", 4));

//? Ternarios
function saludarIdioma(idioma, numero) {
  return idioma === "es"
    ? "Hola"
    : idioma === "en"
    ? "Hello"
    : idioma === "man" && numero === 5
    ? "Ni hao"
    : "✌️";
}

const frase = prompt("Ingrese una palabra o frase");
const cantidad = frase.length;
const mensajeCantidad = `La frase "${frase}" tiene ${cantidad} caracteres.`;
console.log(mensajeCantidad)

const fraseMinusculas = frase.toLowerCase();
const fraseMayusculas = frase.toUpperCase();
const minMay = `Frase en minúsculas: ${fraseMinusculas}. Frase en mayúsculas: ${fraseMayusculas}`;
console.log(minMay)
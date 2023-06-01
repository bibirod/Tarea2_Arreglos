//1.
let numero;
const arregloAzar= [];
for (var i = 0; i < 10; i++) {
    numero = Math.floor(Math.random() * 100);
    arregloAzar.push(numero);
    
    }
    console.log(arregloAzar);

    //2.
let entrada = prompt("Ingresa varias palabras separadas por coma:");
let datos = entrada.split(",");

console.log(datos);

//3.
let numeros = [10, 40, 30, 20, 15, 5];
var numerosOrdenados = numeros.sort(function(a, b) {
    return a - b;
});
let mayor = numerosOrdenados[numerosOrdenados.length-1];
let menor = numerosOrdenados[0];
console.log(numerosOrdenados);
console.log(`el numero mayor es ${mayor}`);
console.log(`el numero menor es ${menor}`);

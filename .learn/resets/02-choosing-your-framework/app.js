// Declaramos una función con el nombre exacto "formEuroToDollar"
let oneEurosIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEurosIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}
// Equivalencia fromDollarToYen
const fromEuroToYen = function(valueInEuro) {
    // Convertimos el valor a Yen
    let valueInYen = valueInEuro * oneEurosIs.JPY;
    // Retornamos el valor en Yen
    return valueInYen;
}
// Equivalencia Libra
const fromEuroToPound = function(valueInEuro) {
    // Convertimos el valor a Pound
    let valueInPound = valueInEuro * oneEurosIs.GBP;
    // Retornamos el valor en Pound
    return valueInPound;
}
// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar };

const { fromEuroToDollar } = require("test./");



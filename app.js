// app.js

const sum = (a, b) => {
    return a + b;
};

const fromEuroToDollar = (euro) => {
    const dollarRate = 1.07;
    return euro * dollarRate;
}

const fromDollarToYen = (dollar) => {
    const yenRate = 156.5;
    const dollarToEuroRate = 1 / 1.07;
    return dollar * dollarToEuroRate * yenRate;
}

const fromYenToPound = (yen) => {
    const poundRate = 0.87;
    const yenToEuroRate = 1 / 156.5;
    return yen * yenToEuroRate * poundRate;
}

// Export the functions
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
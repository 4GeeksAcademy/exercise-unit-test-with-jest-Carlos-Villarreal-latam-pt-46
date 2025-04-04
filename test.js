// Import all the necessary functions from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Use the imported function
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
     expect(dollars).toBe(expected);
})

test("One dollar should be 146.26168224299064 yens", function() {
    // Use the imported function
    const yens = fromDollarToYen(1);

    const expected = (1/1.07)*156.5;

     expect(yens).toBe(expected);
})

test("One yen should be 0.0055591054313099035 pounds", function() {
    // Use the imported function
    const pounds = fromYenToPound(1);

    const expected = (1/156.5)*0.87;

     expect(pounds).toBe(expected);
})
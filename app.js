// Import the user-defined module
const math = require('./10e');
// Display the workflow of modularization
console.log('--- Workflow of Modularization in Node.js ---');
console.log('1. Create a user-defined module.');
console.log('2. Export functions or variables from the module.');
console.log('3. Import the module into the main file using require().');
console.log('4. Use the exported members in your main application.\n');
// Use the functions from mathModule
let a = 10, b = 5;
console.log(`Addition of a and b:`, math.add(a, b));
console.log(`Subtraction of a and b:`, math.subtract(a, b));




console.log(`Multiplication of a and b:`, math.multiply(a, b));
console.log(`Division of a and b:`, math.divide(a, b));


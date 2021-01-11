/**
 * A demonstration on how to executes functions defined in different modules
 */

const function1 = require('./ch_1/example1');
const function2 = require('./ch_1/example2');

// executing functions according to the definition
function1();                // immediate call
function2('Hey there!');    // function with arguments
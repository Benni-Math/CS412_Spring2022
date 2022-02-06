// main function:
// takes as input a three letter string of the form "abc"
// where a and c are single digit numbers and b is a basic arithmetic operator
const evaluate = input => getOperator(input.charAt(1))(parseInt(input.charAt(0)), parseInt(input.charAt(2)));

// Helper function which finds what operator we are dealing with
const getOperator = operator => {
    switch (operator) {
        case '+':
            const add = (left, right) => left+right;
            return add;
        case '-':
            const sub = (left, right) => left-right;
            return sub;
        case '*':
            const mult = (left, right) => left*right;
            return mult;
        case '/':
            const div = (left, right) => left/right;
            return div;
        case '^':
            const exp = (left, right) => left**right;
            return exp;
        case '%':
            const mod = (left, right) => left%right;
            return mod;
        default:
            console.log(`Operator ${operator} not found`)
    }
}

// The array of expressions that we want to evaluate for our sample
const expressions = ['8+3', '8-3', '8*3', '8/3', '8^3', '8%3'];

// A function for outputting our samples to the console, takes an array as input
const output = input => (input.map(exp => console.log(`${exp} = ${evaluate(exp)}`)))

output(expressions)
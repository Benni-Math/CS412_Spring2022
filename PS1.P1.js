// main function:
// takes a string of all lowercase alphabet characters and sorts into reverse alphabetic order
const revAlph = str => str.split("").sort().reverse().join("");

// testing revAlph on supercalifragilisticexpialidocious
console.log(`${revAlph("supercalifragilisticexpialidocious")}`);
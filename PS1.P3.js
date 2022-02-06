// main function
const decorate = (str, decorator) => decorator(str);

const s = 'supercalifragilisticexpialidocious';

// first call
console.table(decorate(s, (str => str.replace(/c/g, " c").split(' '))))

// second call
console.table(decorate(s, (str => {
    const obj = {
        'originalString': str,
        'modifiedString': str.replace(/a/g, 'A'),
        'numberReplaced': (str.split('a').length - 1),
        'length': str.length
    }
    return obj;
})))
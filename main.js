function sum(a, b) {
  return a + b;
}

function capitalize(str){
    if(str.length === 0) return str;
    const firstChar = str[0];
    if(firstChar >= 'a' && firstChar <= 'z'){
        return firstChar.toUpperCase() + str.slice(1);
    }
    return str;   
}

function reverse(str){
    return str.split('').reverse().join('');
}

const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
}

function charShifted(char, shift, index){
    return String.fromCharCode( ((char.charCodeAt(0) + shift - index) % 26 + 26) % 26 + index);
}

function caesarCiphor(str, shift){
    return str.split('').map(char => {
        if(char >= 'a' && char <= 'z'){
            return charShifted(char, shift, 97);
        } else if(char >= 'A' && char <= 'Z'){
            return charShifted(char, shift, 65);
        } else {
            return char;
        }
    }).join('');
}

function average(arr){
    if(arr.length === 0) return null;
    return arr.reduce((a,b) => a + b, 0) / arr.length;
}

function minOfArray(arr){
    if(arr.length === 0) return null;
    return Math.min(...arr);
}

function maxOfArray(arr){
    if(arr.length === 0) return null;
    return Math.max(...arr);
}

function analyzeArray(arr){
    return {
        average: average(arr),
        min: minOfArray(arr),
        max: maxOfArray(arr),
        length: arr.length
    }
}
export { sum, capitalize, reverse, calculator, caesarCiphor, analyzeArray };
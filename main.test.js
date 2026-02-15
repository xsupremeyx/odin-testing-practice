import { sum, capitalize, reverse, calculator, caesarCiphor, analyzeArray } from './main.js';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
})

test('capitalize the first letter of string - 1', () => {
    expect(capitalize('hello')).toBe('Hello');
})

test('capitalize ( A Number doesnt capitalize!) - 2', () => {
    expect(capitalize('1hello')).toBe('1hello');
})

test('capitalize ( A Special symbol doesnt capitalize!) - 2', () => {
    expect(capitalize('@hello')).toBe('@hello');
})

test('capitalize ( Empty String ) - 3', () => {
    expect(capitalize('')).toBe('');
})

test('reverse the string - 1', () => {
    expect(reverse('hello_123')).toBe('321_olleh');
})

test('reverse the string ( Empty String ) - 2', () => {
    expect(reverse('')).toBe('');
})

test('calculator: add - 1', () => {
    expect(calculator.add(5, 3)).toBe(8);
})

test('calculator: add - 2', () => {
    expect(calculator.add(5, -3)).toBe(2);
})

test('calculator: subtract - 1', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
})

test('calculator: subtract - 2', () => {
    expect(calculator.subtract(5, -3)).toBe(8);
})

test('calculator: multiply - 1', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
})

test('calculator: multiply - 2', () => {
    expect(calculator.multiply(5, -3)).toBe(-15);
})

test('calculator: divide - 1', () => {
    expect(calculator.divide(6, 3)).toBe(2);
})

test('calculator: divide - 2', () => {
    expect(calculator.divide(6, -3)).toBe(-2);
})

test('calculator: divide - 3 ( Divide by zero )', () => {
    expect(calculator.divide(6, 0)).toBe(Infinity);
})


// Caesor Ciphor

test('caesarCiphor: shift', () => {
    expect(caesarCiphor('abc', 1)).toBe('bcd');
})

test('caesarCiphor: shift with wrap around', () => {
    expect(caesarCiphor('xyz', 3)).toBe('abc');
})

test('caesarCiphor: shift with negative shift', () => {
    expect(caesarCiphor('bcd', -1)).toBe('abc');
})

test('caesarCiphor: test case preservation', () => {
    expect(caesarCiphor('HeLLo', 3)).toBe('KhOOr');
})

test('caesarCiphor: punctuation etc characters remain unchanged', () => {
    expect(caesarCiphor('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

test('caesarCiphor: empty string', () => {
    expect(caesarCiphor('', 3)).toBe('');
})

test('caesarCiphor: large shift value', () => {
    expect(caesarCiphor('abc', 60)).toBe('ijk');
})

test('caesarCiphor: negative shift value', () => {
    expect(caesarCiphor('def', -4)).toBe('zab');
})

// Analyse array

test('analyzeArray: normal case', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
})

test('analyzeArray: empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    });
})

test('analyzeArray: single element array', () => {
    expect(analyzeArray([42])).toEqual({
        average: 42,
        min: 42,
        max: 42,
        length: 1
    });
})

test('analyzeArray: array with negative numbers', () => {
    expect(analyzeArray([-1, -2, -3, -4, -5])).toEqual({
        average: -3,
        min: -5,
        max: -1,
        length: 5
    });
})

test('analyzeArray: array with mixed numbers', () => {
    expect(analyzeArray([-1, 0, 1])).toEqual({
        average: 0,
        min: -1,
        max: 1,
        length: 3
    });
})
import { sum, capitalize, reverse, calculator, caesarCiphor, analyzeArray } from './main.js';

test('Addition test', () => {
    expect(sum(1,2)).toBe(3);
})

test('Capitalise Tests', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('1hello')).toBe('1hello');
    expect(capitalize('@hello')).toBe('@hello');
    expect(capitalize('')).toBe('');
})

test('Reversal Tests', () => {
    expect(reverse('hello_123')).toBe('321_olleh');
    expect(reverse('')).toBe('');

})

test('Calculator tests', () => {
    expect(calculator.add(5, 3)).toBe(8);
    expect(calculator.add(5, -3)).toBe(2);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(5, -3)).toBe(8);
    expect(calculator.multiply(5, 3)).toBe(15);
    expect(calculator.multiply(5, -3)).toBe(-15);
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(6, -3)).toBe(-2);
    expect(calculator.divide(6, 0)).toBe(Infinity);
})
// Caesor Ciphor

test('CaesorCiphor Tests', () => {
    expect(caesarCiphor('abc', 1)).toBe('bcd');
    expect(caesarCiphor('xyz', 3)).toBe('abc');
    expect(caesarCiphor('bcd', -1)).toBe('abc');
    expect(caesarCiphor('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCiphor('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCiphor('', 3)).toBe('');
    expect(caesarCiphor('abc', 60)).toBe('ijk');
    expect(caesarCiphor('ijk', -60)).toBe('abc');
})
// Analyse array

test('analyzeArray tests', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5
    });
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
    });
    expect(analyzeArray([42])).toEqual({
        average: 42,
        min: 42,
        max: 42,
        length: 1
    });
    expect(analyzeArray([-1, -2, -3, -4, -5])).toEqual({
        average: -3,
        min: -5,
        max: -1,
        length: 5
    });
    expect(analyzeArray([-1, 0, 1])).toEqual({
        average: 0,
        min: -1,
        max: 1,
        length: 3
    });
})
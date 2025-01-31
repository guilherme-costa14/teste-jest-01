const divisao = require('./divisao');

test('dividir 10 / 2 = 5', () => {
    expect(divisao(10,2)).toBe(5);
})

test('dividir 9 / 3 = 3', () => {
    expect(divisao(9,3)).toBe(3);
})

test('dividir -9 / -3 = 3', () => {
    expect(divisao(-9,-3)).toBe(3);
})

test('dividir -9 / 3 = -3', () => {
    expect(divisao(-9,3)).toBe(-3);
})

test('dividir 9 / -3 = -3', () => {
    expect(divisao(9,-3)).toBe(-3);
})

test('dividir 1 / 0 = não pode dividir por 0', () => {
    expect(divisao(1,0)).toBe("Não pode ser dividido por 0");
})
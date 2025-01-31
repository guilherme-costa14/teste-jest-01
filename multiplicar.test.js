const multiplicar = require('./multiplicar');

test('multiplicar 3 * 4 = 12', () =>{
    expect(multiplicar(3,4)).toBe(12)
})

test('multiplicar -1 * -1 = 1', () =>{
    expect(multiplicar(-1,-1)).toBe(1)
})

test('multiplicar 0 * 5 = 0', () =>{
    expect(multiplicar(0,5)).toBe(0)
})
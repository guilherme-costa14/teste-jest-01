const subtrair = require('./subtrair');

test('subtrair 5 - 2 deve ser igual a 3', () =>{
    expect(subtrair(5,2)).toBe(3);
})

test('subtrair 0 - 0 deve ser igual a 0', () =>{
    expect(subtrair(0,0)).toBe(0);
})

test('subtrair -2 - (-2) deve ser igual a 0', () =>{
    expect(subtrair(-2,-2)).toBe(0);
})

test('subtrair "3" - 3 deve ser igual a 0', () =>{
    expect(subtrair("3",3)).toBe(0);
})
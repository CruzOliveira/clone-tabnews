const calculadora = require("../models/calculadora");

test("espero que 100 + 1 sea igual a 101", () => {
  expect(calculadora.somar(100, 1)).toBe(101);
});
test("Espero que 100 - 1 seja igual a 99", () => {
  expect(calculadora.subtrair(100, 1)).toBe(99);
});
test("Espero que 100 * 2 seja igual a 200", () => {
  expect(calculadora.multiplicar(100, 2)).toBe(200);
});
test("Espero que 100 / 2 seja igual a 50", () => {
  expect(calculadora.dividir(100, 2)).toBe(50);
});
test("Espero que dividir por zero lance um erro", () => {
  expect(() => calculadora.dividir(100, 0)).toThrow("Divisão por zero não é permitida.");
});
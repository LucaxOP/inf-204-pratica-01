const test = require("node:test");
const assert = require("node:assert/strict");

const { calcularTotal, calcularPorcentagem } = require("./votacao");

test("calcularTotal soma os votos dos tres candidatos", () => {
  assert.equal(calcularTotal(3, 2, 5), 10);
});

test("calcularPorcentagem retorna zero quando ainda nao ha votos", () => {
  assert.equal(calcularPorcentagem(0, 0), 0);
});

test("calcularPorcentagem arredonda o resultado para uma casa decimal", () => {
  assert.equal(calcularPorcentagem(1, 3), 33.3);
});

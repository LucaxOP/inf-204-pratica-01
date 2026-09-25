const test = require("node:test");
const assert = require("node:assert/strict");

const { formatarSaudacao } = require("./usuario");

test("formatarSaudacao inclui o nome recebido pela navegacao", () => {
  assert.equal(formatarSaudacao("Turma INF204"), "Bem-vindo, Turma INF204!");
});

test("formatarSaudacao usa um nome padrao quando o parametro estiver vazio", () => {
  assert.equal(formatarSaudacao("   "), "Bem-vindo, usuário!");
});

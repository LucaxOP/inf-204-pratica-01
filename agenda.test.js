const test = require("node:test");
const assert = require("node:assert/strict");

const { contatosIniciais, adicionarContatos } = require("./agenda");

test("a agenda inicial atende ao minimo de quinze contatos", () => {
  assert.ok(contatosIniciais.length >= 15);
});

test("adicionarContatos inclui exatamente tres contatos e preserva os existentes", () => {
  const existentes = [
    { id: "1", nome: "Contato original", telefone: "(31) 90000-0000" },
  ];

  const resultado = adicionarContatos(existentes);

  assert.equal(resultado.length, 4);
  assert.deepEqual(resultado[0], existentes[0]);
});

test("adicionarContatos gera identificadores unicos mesmo apos varias cargas", () => {
  const primeiraCarga = adicionarContatos(contatosIniciais);
  const segundaCarga = adicionarContatos(primeiraCarga);
  const identificadores = segundaCarga.map((contato) => contato.id);

  assert.equal(new Set(identificadores).size, identificadores.length);
});

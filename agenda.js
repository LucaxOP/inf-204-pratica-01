const contatosIniciais = [
  { id: "1", nome: "Alice Silva", telefone: "(31) 99999-1111" },
  { id: "2", nome: "Bruno Costa", telefone: "(31) 98888-2222" },
  { id: "3", nome: "Carlos Souza", telefone: "(31) 97777-3333" },
  { id: "4", nome: "Diana Rocha", telefone: "(31) 96666-4444" },
  { id: "5", nome: "Eduardo Lima", telefone: "(31) 95555-5555" },
  { id: "6", nome: "Fernanda Alves", telefone: "(31) 94444-6666" },
  { id: "7", nome: "Gabriel Mendes", telefone: "(31) 93333-7777" },
  { id: "8", nome: "Helena Martins", telefone: "(31) 92222-8888" },
  { id: "9", nome: "Igor Ribeiro", telefone: "(31) 91111-9999" },
  { id: "10", nome: "Juliana Ferreira", telefone: "(31) 90000-1010" },
  { id: "11", nome: "Kaio Barbosa", telefone: "(31) 98989-1111" },
  { id: "12", nome: "Larissa Gomes", telefone: "(31) 97878-1212" },
  { id: "13", nome: "Marcos Oliveira", telefone: "(31) 96767-1313" },
  { id: "14", nome: "Natália Castro", telefone: "(31) 95656-1414" },
  { id: "15", nome: "Otávio Nunes", telefone: "(31) 94545-1515" },
];

function adicionarContatos(contatos) {
  const maiorId = contatos.reduce(
    (maior, contato) => Math.max(maior, Number(contato.id) || 0),
    0,
  );

  const novosContatos = Array.from({ length: 3 }, (_, indice) => {
    const id = maiorId + indice + 1;

    return {
      id: String(id),
      nome: `Novo Contato ${id}`,
      telefone: `(31) 90000-${String(id).padStart(4, "0")}`,
    };
  });

  return [...contatos, ...novosContatos];
}

module.exports = { contatosIniciais, adicionarContatos };

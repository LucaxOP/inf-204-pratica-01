function formatarSaudacao(nomeUsuario) {
  const nome = nomeUsuario?.trim() || "usuário";

  return `Bem-vindo, ${nome}!`;
}

module.exports = { formatarSaudacao };

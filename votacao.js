function calcularTotal(votosA, votosB, votosC) {
  return votosA + votosB + votosC;
}

function calcularPorcentagem(votos, totalVotos) {
  if (totalVotos === 0) {
    return 0;
  }

  return Math.round((votos / totalVotos) * 1000) / 10;
}

module.exports = { calcularTotal, calcularPorcentagem };

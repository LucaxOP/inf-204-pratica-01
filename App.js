import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { calcularTotal, calcularPorcentagem } = require("./votacao");

const candidatos = [
  { id: "A", nome: "Candidato A", cor: "#0064A0" },
  { id: "B", nome: "Candidato B", cor: "#2E7D32" },
  { id: "C", nome: "Candidato C", cor: "#7B1FA2" },
];

export default function App() {
  const [votosA, setVotosA] = useState(0);
  const [votosB, setVotosB] = useState(0);
  const [votosC, setVotosC] = useState(0);
  const [nomeMesario, setNomeMesario] = useState("");

  const totalVotos = calcularTotal(votosA, votosB, votosC);
  const votos = { A: votosA, B: votosB, C: votosC };
  const registrarVoto = {
    A: () => setVotosA((valorAnterior) => valorAnterior + 1),
    B: () => setVotosB((valorAnterior) => valorAnterior + 1),
    C: () => setVotosC((valorAnterior) => valorAnterior + 1),
  };

  const zerarUrna = () => {
    setVotosA(0);
    setVotosB(0);
    setVotosC(0);
  };

  return (
    <SafeAreaView style={styles.areaSegura}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.titulo}>Painel de Votação</Text>

        <View style={styles.painelMesario}>
          <Text style={styles.rotuloInput}>Identificação do mesário</Text>
          <TextInput
            accessibilityLabel="Nome do mesário"
            autoCapitalize="words"
            onChangeText={setNomeMesario}
            placeholder="Digite o nome"
            style={styles.input}
            value={nomeMesario}
          />
          <Text style={styles.mesarioAtual}>
            Mesário atual: {nomeMesario.trim() || "Não informado"}
          </Text>
        </View>

        {candidatos.map((candidato) => {
          const quantidadeVotos = votos[candidato.id];
          const porcentagem = calcularPorcentagem(quantidadeVotos, totalVotos);

          return (
            <View key={candidato.id} style={styles.candidatoContainer}>
              <Text style={styles.nomeCandidato}>{candidato.nome}</Text>
              <Text style={styles.resultadoCandidato}>
                {quantidadeVotos} {quantidadeVotos === 1 ? "voto" : "votos"} ({porcentagem.toFixed(1)}%)
              </Text>
              <TouchableOpacity
                accessibilityLabel={`Votar no ${candidato.nome}`}
                accessibilityRole="button"
                activeOpacity={0.75}
                onPress={registrarVoto[candidato.id]}
                style={[styles.botaoVotar, { backgroundColor: candidato.cor }]}
              >
                <Text style={styles.textoBotao}>Votar em {candidato.id}</Text>
              </TouchableOpacity>
            </View>
          );
        })}

        <View style={styles.rodape}>
          <Text style={styles.totalTexto}>Total de votos: {totalVotos}</Text>
          <TouchableOpacity
            accessibilityLabel="Zerar todos os votos da urna"
            accessibilityRole="button"
            activeOpacity={0.75}
            onPress={zerarUrna}
            style={styles.botaoZerar}
          >
            <Text style={styles.textoBotao}>Zerar Urna</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  titulo: {
    marginBottom: 24,
    color: "#14325A",
    fontSize: 28,
    fontWeight: "bold",
  },
  painelMesario: {
    width: "100%",
    maxWidth: 520,
    marginBottom: 20,
  },
  rotuloInput: {
    marginBottom: 6,
    color: "#263238",
    fontSize: 16,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: "#B0BEC5",
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    color: "#263238",
    fontSize: 16,
  },
  mesarioAtual: {
    marginTop: 8,
    color: "#546E7A",
    fontSize: 15,
  },
  candidatoContainer: {
    width: "100%",
    maxWidth: 520,
    alignItems: "center",
    marginBottom: 12,
    padding: 16,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    elevation: 2,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  nomeCandidato: {
    color: "#263238",
    fontSize: 19,
    fontWeight: "bold",
  },
  resultadoCandidato: {
    marginBottom: 12,
    marginTop: 5,
    color: "#455A64",
    fontSize: 16,
  },
  botaoVotar: {
    width: "80%",
    alignItems: "center",
    padding: 11,
    borderRadius: 6,
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  rodape: {
    width: "100%",
    maxWidth: 520,
    alignItems: "center",
    marginTop: 18,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: "#B0BEC5",
  },
  totalTexto: {
    marginBottom: 14,
    color: "#14325A",
    fontSize: 21,
    fontWeight: "bold",
  },
  botaoZerar: {
    paddingHorizontal: 28,
    paddingVertical: 13,
    borderRadius: 6,
    backgroundColor: "#616161",
  },
});

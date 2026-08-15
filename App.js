import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const [contagem, setContagem] = useState(0);

  const decrementar = () => {
    setContagem((valorAtual) => Math.max(0, valorAtual - 1));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contagem Atual:</Text>
      <Text style={styles.numero}>{contagem}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Decrementar a contagem em um"
          activeOpacity={0.75}
          onPress={decrementar}
          style={[styles.botao, styles.botaoDecrementar]}
        >
          <Text style={styles.textoBotao}>Decrementar -1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Incrementar a contagem em um"
          activeOpacity={0.75}
          onPress={() => setContagem((valorAtual) => valorAtual + 1)}
          style={[styles.botao, styles.botaoIncrementar]}
        >
          <Text style={styles.textoBotao}>Incrementar +1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          accessibilityRole="button"
          accessibilityLabel="Zerar a contagem"
          activeOpacity={0.75}
          onPress={() => setContagem(0)}
          style={[styles.botao, styles.botaoZerar]}
        >
          <Text style={styles.textoBotao}>Zerar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f4f7f5"
  },
  titulo: {
    fontSize: 22,
    color: "#263238"
  },
  numero: {
    marginVertical: 24,
    fontSize: 64,
    fontWeight: "bold",
    color: "#2e7d32"
  },
  botoes: {
    width: "100%",
    maxWidth: 320,
    gap: 12
  },
  botao: {
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10
  },
  botaoDecrementar: {
    backgroundColor: "#c62828"
  },
  botaoIncrementar: {
    backgroundColor: "#2e7d32"
  },
  botaoZerar: {
    backgroundColor: "#455a64"
  },
  textoBotao: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#ffffff"
  }
});

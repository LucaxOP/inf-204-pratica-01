import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.iconeContainer}>
        <Text style={styles.icone}>⌂</Text>
      </View>
      <Text style={styles.titulo}>Tela Inicial</Text>
      <Text style={styles.descricao}>
        Conheça a navegação em pilha e a passagem de parâmetros entre telas.
      </Text>
      <TouchableOpacity
        accessibilityLabel="Ver perfil do usuário"
        accessibilityRole="button"
        activeOpacity={0.75}
        onPress={() =>
          navigation.navigate("Detalhes", { nomeUsuario: "Turma INF204" })
        }
        style={styles.botao}
      >
        <Text style={styles.textoBotao}>Ver Perfil do Usuário</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 28,
    backgroundColor: "#F4F7FB",
  },
  iconeContainer: {
    width: 76,
    height: 76,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 38,
    backgroundColor: "#DCEEFF",
  },
  icone: {
    color: "#0064A0",
    fontSize: 38,
  },
  titulo: {
    color: "#14325A",
    fontSize: 28,
    fontWeight: "bold",
  },
  descricao: {
    maxWidth: 360,
    marginBottom: 28,
    marginTop: 10,
    color: "#546E7A",
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
  },
  botao: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 9,
    backgroundColor: "#0064A0",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

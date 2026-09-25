import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const { formatarSaudacao } = require("../utils/usuario");

export default function DetalhesUsuario({ navigation, route }) {
  const nomeUsuario = route.params?.nomeUsuario;

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>INF</Text>
      </View>
      <Text style={styles.titulo}>Detalhes do Perfil</Text>
      <Text style={styles.texto}>{formatarSaudacao(nomeUsuario)}</Text>
      <Text style={styles.informacao}>
        O nome exibido acima foi recebido como parâmetro da tela inicial.
      </Text>
      <TouchableOpacity
        accessibilityLabel="Voltar para a tela anterior"
        accessibilityRole="button"
        activeOpacity={0.75}
        onPress={() => navigation.goBack()}
        style={styles.botaoVoltar}
      >
        <Text style={styles.textoBotao}>Voltar</Text>
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
  avatar: {
    width: 92,
    height: 92,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    borderRadius: 46,
    backgroundColor: "#14325A",
  },
  avatarTexto: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "bold",
  },
  titulo: {
    color: "#14325A",
    fontSize: 27,
    fontWeight: "bold",
  },
  texto: {
    marginTop: 10,
    color: "#37474F",
    fontSize: 19,
  },
  informacao: {
    maxWidth: 350,
    marginBottom: 28,
    marginTop: 12,
    color: "#607D8B",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  botaoVoltar: {
    paddingHorizontal: 30,
    paddingVertical: 13,
    borderRadius: 8,
    backgroundColor: "#0064A0",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

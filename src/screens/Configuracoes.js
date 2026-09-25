import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <View style={styles.cartao}>
        <Text style={styles.icone}>⚙</Text>
        <Text style={styles.titulo}>Configurações</Text>
        <Text style={styles.texto}>
          Esta tela está disponível pela navegação em abas inferiores.
        </Text>
      </View>
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
  cartao: {
    width: "100%",
    maxWidth: 380,
    alignItems: "center",
    padding: 28,
    borderRadius: 16,
    backgroundColor: "#FFFFFF",
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  icone: {
    marginBottom: 14,
    color: "#0064A0",
    fontSize: 42,
  },
  titulo: {
    color: "#14325A",
    fontSize: 27,
    fontWeight: "bold",
  },
  texto: {
    marginTop: 10,
    color: "#607D8B",
    fontSize: 16,
    lineHeight: 23,
    textAlign: "center",
  },
});

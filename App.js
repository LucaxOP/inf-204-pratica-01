import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { contatosIniciais, adicionarContatos } = require("./agenda");

export default function App() {
  const [contatos, setContatos] = useState(contatosIniciais);
  const [carregando, setCarregando] = useState(false);
  const [carregandoMais, setCarregandoMais] = useState(false);

  const renderizarContato = ({ item }) => (
    <View style={styles.cardContato}>
      <View style={styles.avatar}>
        <Text style={styles.avatarTexto}>{item.nome.charAt(0)}</Text>
      </View>
      <View style={styles.dadosContato}>
        <Text style={styles.nomeText}>{item.nome}</Text>
        <Text style={styles.telefoneText}>{item.telefone}</Text>
      </View>
    </View>
  );

  const renderizarSeparador = () => <View style={styles.separador} />;

  const renderizarVazio = () => (
    <View style={styles.containerVazio}>
      <Text style={styles.iconeVazio}>☎</Text>
      <Text style={styles.textoVazio}>Agenda vazia.</Text>
      <Text style={styles.instrucaoVazio}>Puxe para baixo para restaurar os contatos.</Text>
    </View>
  );

  const recarregarContatos = () => {
    setCarregando(true);

    setTimeout(() => {
      setContatos([...contatosIniciais]);
      setCarregando(false);
    }, 2000);
  };

  const carregarMaisContatos = () => {
    if (carregandoMais || contatos.length === 0) {
      return;
    }

    setCarregandoMais(true);
    setTimeout(() => {
      setContatos((contatosAtuais) => adicionarContatos(contatosAtuais));
      setCarregandoMais(false);
    }, 400);
  };

  return (
    <SafeAreaView style={styles.areaSegura}>
      <View style={styles.container}>
        <View style={styles.cabecalho}>
          <View>
            <Text style={styles.titulo}>Minha Agenda</Text>
            <Text style={styles.subtitulo}>{contatos.length} contatos</Text>
          </View>
          <TouchableOpacity
            accessibilityLabel="Limpar todos os contatos"
            accessibilityRole="button"
            activeOpacity={0.75}
            onPress={() => setContatos([])}
            style={styles.botaoLimpar}
          >
            <Text style={styles.textoBotao}>Limpar Tudo</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          contentContainerStyle={styles.conteudoLista}
          data={contatos}
          ItemSeparatorComponent={renderizarSeparador}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={renderizarVazio}
          ListFooterComponent={
            carregandoMais ? (
              <ActivityIndicator color="#0064A0" style={styles.rodapeLista} />
            ) : null
          }
          onEndReached={carregarMaisContatos}
          onEndReachedThreshold={0.25}
          onRefresh={recarregarContatos}
          refreshing={carregando}
          renderItem={renderizarContato}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: "#F5F5F5",
  },
  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  titulo: {
    color: "#14325A",
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitulo: {
    marginTop: 2,
    color: "#607D8B",
    fontSize: 14,
  },
  botaoLimpar: {
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 8,
    backgroundColor: "#D32F2F",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  conteudoLista: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  cardContato: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#FFFFFF",
  },
  avatar: {
    width: 46,
    height: 46,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    borderRadius: 23,
    backgroundColor: "#E3F2FD",
  },
  avatarTexto: {
    color: "#0064A0",
    fontSize: 20,
    fontWeight: "bold",
  },
  dadosContato: {
    flex: 1,
  },
  nomeText: {
    color: "#263238",
    fontSize: 18,
    fontWeight: "bold",
  },
  telefoneText: {
    marginTop: 4,
    color: "#607D8B",
    fontSize: 16,
  },
  separador: {
    height: 1,
    marginLeft: 80,
    backgroundColor: "#E0E0E0",
  },
  containerVazio: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 32,
  },
  iconeVazio: {
    marginBottom: 12,
    color: "#90A4AE",
    fontSize: 48,
  },
  textoVazio: {
    color: "#607D8B",
    fontSize: 20,
    fontStyle: "italic",
  },
  instrucaoVazio: {
    marginTop: 8,
    color: "#90A4AE",
    fontSize: 14,
    textAlign: "center",
  },
  rodapeLista: {
    paddingVertical: 18,
  },
});

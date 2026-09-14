import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import JogoDaVelha from './JogoDaVelha';

function CartaoPerfil({ nomeInicial, profissao, foto }) {
  const [nome, setNome] = useState(nomeInicial);
  const [seguindo, setSeguindo] = useState(false);

  return (
    <View style={styles.cartao}>
      <Image source={{ uri: foto }} style={styles.avatar} />
      <Text style={styles.nomeUsuario}>{nome}</Text>
      <Text style={styles.profissao}>{profissao}</Text>
      <TouchableOpacity
        style={[styles.botao, seguindo && styles.botaoDesativado]}
        activeOpacity={0.7}
        disabled={seguindo}
        onPress={() => {
          setSeguindo(true);
          alert('Seguindo ' + nome);
        }}
      >
        <Text style={styles.textoBotao}>{seguindo ? 'Já Seguindo' : 'Seguir'}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Alterar nome..."
        value={nome}
        onChangeText={setNome}
      />
    </View>
  );
}

export default function App() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.conteudo}>
      <CartaoPerfil nomeInicial="João Vitor" profissao="Engenheiro de Software" foto="https://i.pravatar.cc/240?img=12" />
      <CartaoPerfil nomeInicial="Ana Souza" profissao="Designer" foto="https://i.pravatar.cc/240?img=47" />
      <CartaoPerfil nomeInicial="Pedro Lima" profissao="Desenvolvedor" foto="https://i.pravatar.cc/240?img=13" />
      <JogoDaVelha />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  conteudo: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  cartao: {
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    width: '80%',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  nomeUsuario: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#14325A',
  },
  profissao: {
    fontSize: 16,
    color: '#505050',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#0064A0',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 20,
  },
  botaoDesativado: {
    backgroundColor: '#808080',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    padding: 10,
    textAlign: 'center',
  },
});

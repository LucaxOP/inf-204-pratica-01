import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function JogoDaVelha() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(''));
  const [jogador, setJogador] = useState('X');

  function jogar(indice) {
    if (tabuleiro[indice] !== '') return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[indice] = jogador;
    setTabuleiro(novoTabuleiro);
    setJogador(jogador === 'X' ? 'O' : 'X');
  }

  return (
    <View style={styles.tabuleiro}>
      <Text>Vez de: {jogador}</Text>
      {[0, 1, 2].map((linha) => (
        <View key={linha} style={styles.linha}>
          {[0, 1, 2].map((coluna) => {
            const indice = linha * 3 + coluna;
            return (
              <TouchableOpacity key={indice} style={styles.celula} onPress={() => jogar(indice)}>
                <Text style={styles.texto}>{tabuleiro[indice]}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tabuleiro: {
    flexDirection: 'column',
  },
  linha: {
    flexDirection: 'row',
  },
  celula: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 30,
  },
});

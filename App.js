import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components';


export default function App() {
  const [kmporh, alterakmporh] = useState("10");
  const [mpors, alterampors] = useState("20");

  const converter = () => {
    const valor = kmporh / 3.6;
    
    alterampors((valor).toFixed(2));
  };

  useEffect(() => {converter();}, [kmporh])
  
  return (
    <Tela>
      <Quadro>
        <Titulo>Converersor de Velocidade</Titulo>

        <Subtitulo>Quilômetros por hora</Subtitulo>
        <Input keyboardType="numeric"  onChangeText={(valor) => {alterakmporh(valor)}} value = {kmporh} placeholder="Quilômetros por hora"/>

        <Subtitulo>Metros por segundo</Subtitulo>
        <Resultado>
        <ResultadoValor>{mpors} m/s</ResultadoValor>
        </Resultado>
      </Quadro>
       
    </Tela>
  );
}

const Tela = styled.View`
  flex: 1;
  background-color: coral;
  align-items: center;
`;

const Quadro = styled.View`
  width: 90%;  
  margin-top: 40px;
  background-color: #676767;
  align-items: center;
  border-radius: 10px;
  padding-bottom: 10px;
`;
const Resultado = styled.View`
  width: 80%;
  height: 45px;
  border-radius: 10px;
  background-color: #ECECEC;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ResultadoValor = styled.Text`
  font-size: 15px;  
  padding-left: 15px;
  color: red;
  font-weight: 600;
  
`;

const Input = styled.TextInput`
  width: 80%;
  margin-top: 5px;
  height: 45px;
  border-radius: 10px;
  background-color: #ECECEC;
  padding-left: 15px;
  font-size: 12px;
`;


const Titulo = styled.Text`
  margin-top: 15px;
  font-size: 22px;
  color: #FAFAFA;
`;

const Subtitulo = styled.Text`
  margin-top: 10px;
  color: #FAFAFA;
  font-size: 12px;
`;
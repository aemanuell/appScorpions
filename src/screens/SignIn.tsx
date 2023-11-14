import { useNavigation } from "@react-navigation/native";
import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base";

import { AuthNavigatorRoutesProps } from '@routes/auth.routes';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';

import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ChatHeader } from "@components/ChatHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

const API_URL = 'http://192.168.1.15:3333'; // ou o IP da sua máquina se estiver usando um dispositivo físico

interface Login {
  id: number;
  email: string;
  password: string;
}

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    try {
      const response = await axios.get(`${API_URL}/users?email=${email}&password=${password}`);

      if (response.data.length > 0) {
        // Login bem-sucedido, navegue para a próxima tela ou execute a lógica necessária
        Alert.alert('Login bem-sucedido!');
        navigation.navigate('toAcess');
      } else {
        // Credenciais inválidas, exiba uma mensagem de erro
        Alert.alert('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login. Por favor, tente novamente mais tarde.');
    }
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack bg={'red.900'} flex={1} px={10} pb={16}>
        <ChatHeader />
        <Image source={BackgroundImg} defaultSource={BackgroundImg} alt="chat" resizeMode="contain" position="absolute" />
        <Center my={24}>
          <LogoSvg />
          <Text color="white" fontSize="sm">
            Troque mensagens de forma confidencial.
          </Text>
        </Center>
        <Center>
          <Heading color="white" fontSize="xl" mb={6} fontFamily="heading">
            Acesse a conta
          </Heading>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <Input placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
          <Button title="Acessar" variant="outline" onPress={handleLogin} />
        </Center>
      </VStack>
    </ScrollView>
  );
}

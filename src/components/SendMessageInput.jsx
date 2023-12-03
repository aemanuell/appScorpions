import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Input, Text, VStack } from "native-base";
import axios from 'axios'; // Importa o Axios

const API_URL = 'http://192.168.1.15:3333';

// Componente para enviar a mensagem
export function SendMessageInput({ onSendMessage, currentUser }) {
  const [inputMessage, setInputMessage] = useState('');

  const sendMessage = async (userId, messageText) => {
    try {
      const response = await axios.post(`${API_URL}/messages`, {
        userId,
        text: messageText,
        timestamp: new Date().toISOString(),
      });

      // Lógica adicional, se necessário
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      // Trata o erro conforme necessário
    }
  };

  const handleSendMessage = async () => {
    // Ao pressionar o botão, chama a função fornecida pelo api para enviar a mensagem
    onSendMessage(inputMessage);

    // Envia a mensagem para a API
    await sendMessage(currentUser.id, inputMessage);

    setInputMessage('');
  };

  return (
    <VStack
      flexDirection={'row'}
      alignItems={'center'}
      justifyContent={''}
      p={4}
      bgColor={'red.900'}
      borderTopWidth={1}
      borderTopColor={'red.400'}
    >
      <Input
        flex={1}
        width={'70%'}
        fontSize={16}
        paddingRight={15}
        placeholder="Digite sua mensagem..."
        value={inputMessage}
        color='black'
        onChangeText={(text) => setInputMessage(text)}
      />
      <VStack
        bgColor={'yellow.400'}
        borderRadius={16}
        ml={6}
      >
        <TouchableOpacity
          onPress={handleSendMessage}
        >
          <Text 
            py={2}
            px={6} 
            color={'gray.700'} fontSize={16}
          >
            Enviar
          </Text>
        </TouchableOpacity>
      </VStack>
    </VStack>
  );
}

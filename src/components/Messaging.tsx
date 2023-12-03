import React, { useState, useEffect } from 'react';
import { VStack, View } from 'native-base';
import { DisplayedMessage } from './DisplayedMessage';
import { SendMessageInput } from './SendMessageInput';
import PopupComponent from './PopupComponent';
import axios from 'axios';

const API_URL = 'http://192.168.1.15:3333';

interface User {
  id: number;
  // outras propriedades do usuário, se houver
}

interface MessagingProps {
  currentUser: User;
  // API_URL: string;
}

// ... (importações)

export function Messaging({ currentUser }: MessagingProps) {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [showResponsePopup, setShowResponsePopup] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSendMessage = async (message: string) => {
    if (message.trim() === '') {
      return;
    }

    setDisplayedMessages([...displayedMessages, `Você: ${message}`]);

    try {
      // await sendMessage(currentUser.id, message);

      console.log('Mensagem enviada com sucesso!');

      const response = await generateResponse(currentUser.id, message, API_URL);

      console.log('Resposta gerada com sucesso:', response);

      setResponseMessage(response);
      setShowResponsePopup(true);

      setDisplayedMessages((prevMessages) => [...prevMessages, `${response}`]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
    }
  };

  const generateResponse = async (userId: number, message: string, apiUrl: string) => {
    return new Promise<string>(async (resolve) => {
      try {
        // Simula um atraso para a resposta
        setTimeout(async () => {
          const responseText = `Resposta para: ${message}`;
          resolve(responseText);

          // Envia a resposta para a API e atualiza o db.json
          await axios.post(`${apiUrl}/messages`, {
            userId,
            text: responseText,
            timestamp: new Date().toISOString(),
          });
        }, 500);
      } catch (error) {
        console.error('Erro ao gerar resposta:', error);
      }
    });
  };

  useEffect(() => {
    setDisplayedMessages(['Bem-vindo ao chat!']);
  }, []);

  const closePopup = () => {
    setShowResponsePopup(false);
    setResponseMessage('');
  };

  return (
    <VStack flex={1} bg="white">
      <View
        flex={1}
        borderTopWidth={1}
        borderTopColor={'red.500'}
      >
        {displayedMessages.map((message, index) => (
          <DisplayedMessage
            key={index}
            message={message}
            isResponse={index % 2 !== 0}
            isWelcomeMessage={index === 0}
          />
        ))}
      </View>
      <SendMessageInput onSendMessage={handleSendMessage} currentUser={currentUser} />
      {showResponsePopup && (
        <PopupComponent
          message={responseMessage}
          onClose={closePopup}
        />
      )}
    </VStack>
  );
}
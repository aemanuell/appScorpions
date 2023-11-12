// import React, { useState } from 'react';
// import { VStack, View } from 'native-base';
// import { DisplayedMessage } from './DisplayedMessage';
// import { SendMessageInput } from './SendMessageInput';

// export function Messaging() {
//   const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);

//   const handleSendMessage = (message: string) => {
//     // Ao pressionar o botão, adiciona a mensagem ao array e simula uma resposta
//     const response = generateResponse(message);
//     setDisplayedMessages([...displayedMessages, message, response]);
//   };

//   const generateResponse = (message: string) => {
//     // Lógica para gerar uma resposta baseada na mensagem enviada
//     // Aqui você pode ter uma lógica mais complexa se necessário
//     return `Resposta para: ${message}`;
//   };

//   return (
//     <VStack flex={1} bg="white">
//       <View
//         flex={1}
//         borderTopWidth={1}
//         borderTopColor={'red.500'}
//       >
//         {/* Renderiza todas as mensagens no array */}
//         {displayedMessages.map((message, index) => (
//           <DisplayedMessage key={index} message={message} />
//         ))}
//       </View>
//       <SendMessageInput onSendMessage={handleSendMessage} />
//     </VStack>
//   );
// }

// Messaging.tsx

// Messaging.tsx

// ----------------------------------------------------

// import React, { useState } from 'react';
// import { VStack, View } from 'native-base';
// import { DisplayedMessage } from './DisplayedMessage';
// import { SendMessageInput } from './SendMessageInput';

// export function Messaging() {
//   const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);

//   const handleSendMessage = async (message: string) => {
//     // Adiciona a mensagem enviada ao array
//     setDisplayedMessages([...displayedMessages, `Você: ${message}`]);

//     try {
//       // Tenta gerar a resposta e aguarda sua resolução
//       const response = await generateResponse(message);

//       // Adiciona a resposta ao array como mensagem separada
//       setDisplayedMessages([...displayedMessages, `Resposta: ${response}`]);
//     } catch (error) {
//       console.error("Erro ao gerar resposta:", error);
//     }
//   };

//   const generateResponse = (message: string) => {
//     // Lógica para gerar uma resposta baseada na mensagem enviada
//     // Aqui você pode ter uma lógica mais complexa se necessário
//     return new Promise<string>((resolve) => {
//       setTimeout(() => {
//         resolve(`${message}`);
//       }, 500);
//     });
//   };

//   return (
//     <VStack flex={1} bg="white">
//       <View
//         flex={1}
//         borderTopWidth={1}
//         borderTopColor={'red.500'}
//       >
//         {/* Renderiza todas as mensagens no array */}
//         {displayedMessages.map((message, index) => (
//           <DisplayedMessage
//             key={index}
//             message={message}
//             isResponse={index % 2 !== 0} // Aplica o estilo a cada segunda mensagem
//           />
//         ))}
//       </View>
//       <SendMessageInput onSendMessage={handleSendMessage} />
//     </VStack>
//   );
// }

//----------------------------------------------------------

// Messaging.tsx

import React, { useState, useEffect } from 'react';
import { VStack, View } from 'native-base';
import { DisplayedMessage } from './DisplayedMessage';
import { SendMessageInput } from './SendMessageInput';

export function Messaging() {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);

  const handleSendMessage = async (message: string) => {
    // Adiciona a mensagem enviada ao array
    setDisplayedMessages([...displayedMessages, `Você: ${message}`]);

    try {
      // Tenta gerar a resposta e aguarda sua resolução
      const response = await generateResponse(message);

      // Adiciona a resposta ao array como mensagem separada
      setDisplayedMessages((prevMessages) => [...prevMessages, `${response}`]);
    } catch (error) {
      console.error("Erro ao gerar resposta:", error);
    }
  };

  const generateResponse = (message: string) => {
    // Lógica para gerar uma resposta baseada na mensagem enviada
    // Aqui você pode ter uma lógica mais complexa se necessário
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(`Resposta para: ${message}`);
      }, 500);
    });
  };

  useEffect(() => {
    // Adiciona uma mensagem de saudação inicial (pode ser removida se não for necessária)
    setDisplayedMessages(['Bem-vindo ao chat!']);
  }, []); // Executado apenas uma vez no início

  return (
    <VStack flex={1} bg="white">
      <View
        flex={1}
        borderTopWidth={1}
        borderTopColor={'red.500'}
      >
        {/* Renderiza todas as mensagens no array */}
        {displayedMessages.map((message, index) => (
          <DisplayedMessage
            key={index}
            message={message}
            isResponse={index % 2 !== 0}
            isWelcomeMessage={index === 0}
          />
        ))}
      </View>
      <SendMessageInput onSendMessage={handleSendMessage} />
    </VStack>
  );
}

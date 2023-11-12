// import React, { useState } from "react";
// import { TouchableOpacity } from "react-native";
// import { Input, Text, VStack, View } from "native-base";
// import { TextMessaging } from "./Text";


// interface DisplayedMessageProps {
//   message: string;
// }

// export function DisplayedMessage({ message }: DisplayedMessageProps) {
//   return (
//     <View style={{ marginTop: 20 }}>
//       {/* <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mensagem Enviada:</Text> */}
//       {/* <Text style={{ fontSize: 16 }}>{message}</Text> */}

//       <TextMessaging title={message} style={{ /* Adicione os estilos personalizados aqui */ }} />
//     </View>
//   );
// }

// DisplayedMessage.tsx

// import React from 'react';
// import { Text, VStack } from 'native-base';

// type Props = {
//   message: string;
//   isResponse?: boolean; // Adicione a propriedade isResponse
// };

// export function DisplayedMessage({ message, isResponse = false }: Props) {
//   return (
//     <VStack
//       flexDirection={isResponse ? 'row-reverse' : 'row'} // Inverte o flexDirection para a resposta
//       justifyContent={isResponse ? 'flex-end' : 'flex-start'} // Ajusta o justifyContent para a resposta
//       mx={3}
//       my={2}
//     >
//       <Text
//         rounded="lg"
//         color={'white'}
//         maxW={'85%'}
//         bg={'black'}
//         py={1}
//         px={3}
//       >
//         {message}
//       </Text>
//     </VStack>
//   );
// }

// DisplayedMessage.tsx

// DisplayedMessage.tsx

import React from 'react';
import { Text, VStack } from 'native-base';

type Props = {
  message: string;
  isResponse?: boolean;
  isWelcomeMessage?: boolean;
};

export function DisplayedMessage({ message, isResponse, isWelcomeMessage }: Props) {
  return (
    <VStack
      flexDirection={'row'}
      justifyContent={isWelcomeMessage ? 'center' : (isResponse ? 'flex-start' : 'flex-end')}
      mt={isWelcomeMessage ? 2 : 0}
      mb={2}
    >
      <Text
        rounded='lg'
        color={'white'}
        maxW={'85%'}
        bg={'black'}
        py={1}
        px={3}
        mx={3}
      >
        {message}
      </Text>
    </VStack>
  );
}

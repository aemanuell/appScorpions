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

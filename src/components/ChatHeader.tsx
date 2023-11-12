import { Center, VStack } from 'native-base';
import React from 'react';
import { Text } from 'native-base';

export function ChatHeader() {
  return (
      <VStack bg="red.900" px={5} pt={8} position={'fixed'}>
        <Center>
          <Text color="white" fontSize="2xl">Scorpions Chat </Text>
        </Center>
      </VStack>
  );
};
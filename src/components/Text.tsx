import { ITextProps, Text } from "native-base";
import React from 'react';

type Props = ITextProps & {
  title: string;
  style?: any; // Adicionando uma propriedade style personalizada
};

export function TextMessaging({ title, style, ...rest }: Props) {
  return (
    <Text
      rounded="lg"
      color={"white"}
      bg={"black"}
      py={1}
      px={3}
      mx={3}
      style={{
        flex: 1, // Permitir que o componente ajuste automaticamente a largura
        alignSelf: 'flex-start', // Alinhar o componente à esquerda
        ...style, // Manter estilos personalizados
      }}
      {...rest}
    >
      {title}
    </Text>
  );
}

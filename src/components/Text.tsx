import { ITextProps, Text } from "native-base";
import React from 'react';

type Props = ITextProps & {
  title: string;
  style?: any;
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
        flex: 1, 
        alignSelf: 'flex-start',
        ...style,
      }}
      {...rest}
    >
      {title}
    </Text>
  );
}

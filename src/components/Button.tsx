import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
  title: string;
  variant?: 'solid' | 'outline';
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      bg={variant === 'outline' ? 'transparent' : 'green.700'}
      borderWidth={variant === 'outline' ? 1 : 0}
      borderColor="yellow.500"
      rounded="sm"
      _pressed={{
        bg: variant === 'outline' ? 'red.900' : 'green.500',
        borderColor:"red.700"
      }}
      {...rest}
    >
      <Text 
        // color={variant === 'outline' ? 'white' : 'yellow.500'}
        color='white'
        fontFamily="heading"
        fontSize="sm"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
}
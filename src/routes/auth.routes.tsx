import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignIn } from '@screens/SignIn';
import { Chat } from '@screens/Chat';


type AuthRoutes = {
  signIn: undefined;
  signUp: undefined;
  toAcess: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen 
        name="signIn"
        component={SignIn}
      />

      <Screen 
        name="toAcess"
        component={Chat}
      />
    </Navigator>
  )
}
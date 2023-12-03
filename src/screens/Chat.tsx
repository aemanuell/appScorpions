import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { Center, Image, ScrollView, VStack} from "native-base";
import { Text } from "native-base"; 
import { ChatHeader } from "@components/ChatHeader";
import { Messaging } from "@components/Messaging";
import BackgroundImg from '@assets/background.png';
import axios from "axios";

const getCurrentUser = () => {
    return {
      id: 2, // Substituir pelo valor adequado, salvar de acordo com cada usuário
    };
  };

export function Chat() {
   
    const currentUser = getCurrentUser();
  
    return (
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <ChatHeader />
        <Messaging currentUser={currentUser}/>
      </ScrollView>
    );
  }
  
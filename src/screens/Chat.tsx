import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { Center, Image, ScrollView, VStack} from "native-base";
import { Text } from "native-base"; 
import { ChatHeader } from "@components/ChatHeader";
import { Messaging } from "@components/Messaging";
import BackgroundImg from '@assets/background.png';


export function Chat(){
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    return(
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            
            <ChatHeader/>
            {/* <Image 
                source={BackgroundImg}
                defaultSource={BackgroundImg}
                alt="chat"
                // resizeMode="contain"
                // position='absolute'
                height={'78%'}
            /> */}
            <Messaging/>
        </ScrollView>
    )
}
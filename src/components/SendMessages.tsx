import React, { useState } from "react";
import { VStack } from "native-base";
import { SendMessageInput } from "./SendMessageInput";
import { DisplayedMessage } from "./DisplayedMessage";


export function SendMessages() {
    const [displayedMessage, setDisplayedMessage] = useState('');
  
    const handleSendMessage = (message: string) => {
      // Ao pressionar o botão, armazena a mensagem digitada e a exibe
      setDisplayedMessage(message);
    };
    return (
      <VStack>
        <SendMessageInput onSendMessage={handleSendMessage} />
        {/* {displayedMessage && <DisplayedMessage message={displayedMessage} />} */}
      </VStack>
    );  
  }
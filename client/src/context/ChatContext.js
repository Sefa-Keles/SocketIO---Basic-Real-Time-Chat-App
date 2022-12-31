import { useState, createContext, useContext } from 'react'

const ChatContext = createContext();

//Bir komponent icerisinde bir fonksiyon barindir. Bu sebeple alt komponentleri sarmaladiginda aslinda calisan o fonksiyon olur. Bizde bu sebeple komponentin icinde return doneriz.
export const ChatProvider = ({children}) => {
    const [allMessages, setAllMessages] = useState([]);

    const contextState = {
        allMessages, 
        setAllMessages
    }
    
    return <ChatContext.Provider value = {contextState}>
        {children}
    </ChatContext.Provider>
}

export const useChat = () => {
    return useContext(ChatContext);
}
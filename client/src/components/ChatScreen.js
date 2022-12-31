import React from 'react'
import styles from './styles.module.css'
import { useChat } from '../context/ChatContext'
import ChatBubble from './ChatBubble'
import ScrollableFeed from 'react-scrollable-feed'

const ChatScreen = () => {
    const { allMessages } = useChat();
    return (
    <div className={styles.chatScreen}>
        <ScrollableFeed forceScroll={true}>
            {
                allMessages.map((messageItem, index) => <ChatBubble  key={index} messageItem={messageItem}/>)
            }
        </ScrollableFeed>
    </div>
  )
}

export default ChatScreen
import styles from './styles.module.css'

const ChatBubble = ({messageItem}) => {
  return (
    <div className={`${styles.chatBubble} ${messageItem.fromMe ? styles.right : ""}`}>
        {messageItem.message}
    </div>
  )
}

export default ChatBubble
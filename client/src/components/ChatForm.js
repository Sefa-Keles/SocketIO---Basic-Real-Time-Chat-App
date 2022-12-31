import {useState} from 'react'
import styles from './styles.module.css'
import { useChat } from '../context/ChatContext'
import { sendMessage } from './socketApi'

const ChatForm = () => {
  const[ inputText, setInputText] = useState("");
  const { setAllMessages } = useChat();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAllMessages((prevState) => [...prevState, {message:inputText, fromMe:true}])
    //Burada verinin ekrana dusmesi icin backend"den gelen veriyi beklememe gerek yok cunku kendi ekranimda var olan text"i zaten biliyorum ve context"te tutuyorum. Buradan yazilan text diger kullanicilara backend"den gonderilmelidir!
    sendMessage(inputText)
    setInputText("")
  }
  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input className={styles.input} type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder='Type something here...'/>
        </form>
    </div>
  )
}

export default ChatForm
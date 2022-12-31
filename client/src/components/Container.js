import { useEffect } from 'react'
import styles from './styles.module.css'
import ChatScreen from './ChatScreen';
import ChatForm from './ChatForm';
import { useChat } from '../context/ChatContext';
import { init, subscribeMessage, pastMessages } from './socketApi';

//Container"da backende giden ve backend"den donen verileri yollama ve yakala islemini yapmamin mantigi sudur;  Ben inputtaki text"i submit ettigimde context"teki state guncellendiginden dolayi sayfa tekrar render edilmis olacak. Ve bu render edilme anini firsat bilerek sayfa yuklendikten sonra render"in arkasindan ComponentDidMount olayi gelebileceginden useEffect"i kullanarak ComponentDidMount olayini dinlemesi vasitasiyla componentDidMount oldugunda backend"e baglanti islemini bagladim.

const Container = () => {
  const { setAllMessages } = useChat();
    useEffect(() => {
        init();
        pastMessages((pastMessageData) => {
          setAllMessages(pastMessageData)
        })
        subscribeMessage((message) => {
          setAllMessages((prevState) => [...prevState, { message }]);
        })
    },[])
  return (
    <div className={styles.container}>
        <ChatScreen/>
        <ChatForm/>
    </div>
  )
}

export default Container
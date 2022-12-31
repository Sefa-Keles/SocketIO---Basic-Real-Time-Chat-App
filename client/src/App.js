import './App.css';
import { ChatProvider } from './context/ChatContext';
import Container from './components/Container';

function App() {
  return (
    <ChatProvider>
      <div className="App">
        <Container/>
      </div>
    </ChatProvider>
  );
}

export default App;

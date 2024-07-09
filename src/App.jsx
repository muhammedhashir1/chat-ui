import "./App.css";
import Header from "./components/header/Header";
import ChatName from "./components/chat-name/ChatName";
import ChatPage from "./components/chat-page/ChatPage";
import Contacts from "./components/contact/Contacts";

function App() {
  return (
    <div className="app-container">
      <Header />
      <ChatName />
      <Contacts />
      <ChatPage />
    </div>
  );
}

export default App;

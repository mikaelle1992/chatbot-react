import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import ChatBot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className = "conteudo">
         <Home/>
      <ChatBot/>
      </div>
     
     <Footer/>
    </div>
  );
}

export default App;

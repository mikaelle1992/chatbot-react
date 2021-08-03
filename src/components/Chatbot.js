import React, { Component } from 'react'
import ChatConversa from './chat/chatConversa'
import ChatHeader from './chat/chatHeader'
import ChatMensagem from './chat/chatMensagem'
import './chat/chat.css'

class ChatBot extends Component{
    render(){
        return(
            <div className = "chatbot">
            <ChatHeader/>
            <ChatConversa/>
            <ChatMensagem/>
            </div>
        )
    }
}

export default ChatBot
import React from 'react'
import { Alert } from 'reactstrap'
const ChatHeader = props =>{
    return (
        <div className = "chatHeader">

            <Alert color = 'dark'>
                <h1>ChatBot</h1>
            </Alert>
        </div>
    )
}

export default ChatHeader
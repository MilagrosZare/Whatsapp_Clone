import React from 'react'
import Message from './Message/Message'

const MessageList = ({ messages }) => {
    let messagesListJSX = messages.map(
        ( message ) => {
            return <Message
                        user={message.user}
                        hour={message.hour}
                        text={message.text}
                        key={message.id}
                        stattus={message.stattus}
                        />
        }
    )
       return (
        <div className='message-list'>
            {messagesListJSX}
        </div>
    )
}
export default MessageList
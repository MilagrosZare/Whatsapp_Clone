import React from 'react'
import '../Message/Message.css'

//Acá se muestra cada globo de mensaje.

const Message = ({ user, hour, text, id, stattus }) => {
   const user_message = user === 'TÚ';

    return (
      <div className='chat-container'>{/*  CORREGIR URGENTE */}
        <div className='message-balloon'>
        <div className={`message
        ${user_message
          ? 'my-message'
          : 'other-message'}`}>
          <div className='top'>
          <p className='message-text'>{text}</p>
          </div>
          <div className='bottom'>
            <span className='message-hour'>{hour}</span>
            <span className='message-stattus'>{stattus}</span>
          </div>
        </div>
        </div>
        </div>
    )
}

export default Message
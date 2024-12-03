import React from 'react'
import '../Message/Message.css'
import { LuCheck } from "react-icons/lu";
import { LuCheckCheck } from "react-icons/lu";

const Message = ({ user, hour, text, id, stattus }) => {
  const user_message = user === 'TÚ';

  return (
    <div className='chat-container'>
      <div className={`message
        ${user_message
          ? 'my-message'
          : 'other-message'}`}>
        <div className='top'>
          <p className='message-text'>{text}</p>
        </div>
        <div className='bottom'>
          <span className='message-hour'>{hour}</span>
          <span className='message-stattus'>
            {stattus === 'visto' && (
              <span className="blue-double-check"><LuCheckCheck /></span>
            )}
            {stattus === 'no-visto' && (
              <span className="double-check"><LuCheckCheck /></span>
            )}
            {stattus === 'pendiente' && (
              <span className="pending"><LuCheck /></span>
            )}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Message
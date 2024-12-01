import React from 'react'
import '../NewMessage/NewMessage.css'
import { FaRegSmile } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";

const NewMessage = () => {
  return (
    <div className='message-bar'>
      <div className='right-icons'>
      <div className='icon-smile'>
      <FaRegSmile />
        </div>
        <div className='icon-plus'>
        <FaPlus />
      </div>
      </div>
      <div className='input-and-icon'>
      <input type="text" className='input-chat'
        placeholder='Escribe un mensaje' />
        <div className='mic-or-send'>
      <FaMicrophone />
      </div>
      </div>
    </div>
  )
}

export default NewMessage
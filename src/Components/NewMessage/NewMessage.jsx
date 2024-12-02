import React, { useContext, useState } from 'react'
import '../NewMessage/NewMessage.css'
import { useParams } from 'react-router-dom';
import { ContactsContext } from '../../Context/ContactsContext';
import { FaRegSmile } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoSendSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";


const NewMessage = () => {

  const { contact_id } = useParams()

  const { getContactById, addNewMessage } = useContext(ContactsContext)

  const handleSubmitNewMessage = (event) => {
    event.preventDefault()
    const text = event.target.send_message.value
    addNewMessage(contact_id, text)
    event.target.reset()
  }

  const [ImputEmpty, setImputEmpty] = useState(true);

  const handleInputEmpty = (e) => {

    e.preventDefault()

    setImputEmpty(e.target.value === '')
  }

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
      <form onSubmit={handleSubmitNewMessage} className='input-and-icon'>
        <input type="text" className='input-chat' placeholder='Escribe un mensaje' id='send_message' name='send_message' onChange={handleInputEmpty} />
        {ImputEmpty &&
          <button type='submit' className='send'>
            <IoSendSharp />
          </button>
        }
        {ImputEmpty &&
          <button className='mic'>
            <FaMicrophone />
          </button>
        }
      </form>
    </div>
  )
}

export default NewMessage
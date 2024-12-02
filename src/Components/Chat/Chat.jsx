import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ContactsContext } from '../../Context/ContactsContext'
import MessageList from '../MessageList'
import '../Chat/Chat.css'
import HeaderChat from '../HeaderChat/HeaderChat'
import NewMessage from '../NewMessage/NewMessage'

const Chat = () => {
  const {contact_id} = useParams()

  const { getContactById, addNewMessage } = useContext(ContactsContext)

  const contact_selected = getContactById(Number(contact_id)) //Obtiene el contacto.

  return (
    <div className='chat-screen'>
    {
      !contact_selected
      ? ''
      : (<div className='chat'>
        <div className='component-HeaderChat'>
          <HeaderChat
          user={contact_selected.name}
          img={contact_selected.img} />
        </div>
        <div className="component-MessageList">
        <MessageList
        messages={contact_selected.messages}/>
          </div>
          <div className="component-NewMessage">
            <NewMessage />
          </div>
      </div>)
      }
    </div>
  )
}

export default Chat
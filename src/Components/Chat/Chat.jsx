import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ContactsContext } from '../../Context/ContactsContext'
import MessageList from '../MessageList'
import '../Chat/Chat.css'
import HeaderChat from '../HeaderChat/HeaderChat'
import NewMessage from '../NewMessage/NewMessage'

const Chat = () => {
  const { contact_id } = useParams()
  const navigate = useNavigate()

  const { getContactById } = useContext(ContactsContext)

  const contact_selected = getContactById(Number(contact_id))

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        navigate('/')
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [])

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
                messages={contact_selected.messages} />
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
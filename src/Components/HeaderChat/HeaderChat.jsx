import React, { useContext } from 'react'
import './HeaderChat.css'
import { FaVideo } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeftLong } from "react-icons/fa6";
import { ContactsContext } from '../../Context/ContactsContext';
import { useNavigate } from 'react-router-dom';


const HeaderChat = () => {

  const { selected_contact } = useContext(ContactsContext)
  const { isMobile } = useContext(ContactsContext)
  const navigate = useNavigate()

  return (
    <>
      <div className='header'>
        {isMobile && (
          <button className='return-arrow' onClick={() => navigate('/')}><FaArrowLeftLong /></button>
        )}
        {selected_contact && (
          <div className='img-and-name'>
            <img src={selected_contact.img} alt={selected_contact.name} className='img-profile' />
            <h2 className='name-chat'>{selected_contact.name}</h2>
          </div>
        )}
        <div className='icons-chat'>
          <div className='video-call'>
            <div className='video'>
              <FaVideo />
            </div>
            <div className='chevron-down'>
              <FaChevronDown />
            </div>
          </div>
          <div className='search-and-dots'>
            <IoSearchSharp />
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderChat
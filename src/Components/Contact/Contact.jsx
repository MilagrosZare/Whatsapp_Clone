import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
import { ContactsContext } from '../../Context/ContactsContext'


const Contact = ({ id, name, img }) => {
  const { setSelectedContact } = useContext(ContactsContext);

  const handleContactClick = () => {
    setSelectedContact({id, name, img})
  }

  return (
    <div className='container-contact' onClick={handleContactClick}>
      <Link to={`/contact/${id}`}/> 
        <img src={img} className='contact-img'/>
        <h3 className='contact-name'>{name}</h3>
        {/* Añadir el último mensaje, ver cómo hacer. */}
        </div>
  )
}

export default Contact
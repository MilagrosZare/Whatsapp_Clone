import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../Components/Contact/Contact'
import contacts from '../data/messageData'

const ContactsList = () => {
    return (
        <>
            <div className='contacts-list'>
                {contacts.map((contact) => {
                    return (
                        <div key={contact.id} className="contact-item">
                            <Link to={`/contact/${contact.id}`}>
                                <Contact
                                    img={contact.img}
                                    name={contact.name}
                                    key={contact.id}
                                />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ContactsList
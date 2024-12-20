import { createContext, useEffect, useState } from "react";
import React from 'react'
import contacts from "../data/messageData";
import { v4 as uuidv4 } from 'uuid';
import getFormattedHour from "../helpers/getFormattedHour";

const ContactsContext = createContext()

const ContactsContextProvider = ({ children }) => {
    const [contacts_state, setContactsState] = useState(contacts);
    const [selected_contact, setSelectedContact] = useState(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 700)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []) 

    const getContactById = (contact_id) => {
        return contacts_state.find(contact => contact.id === Number(contact_id));
    }

    const addNewMessage = (contact_id, text, hour, stattus) => {
        const new_message = {
            user: 'TÚ',
            text: text,
            id: uuidv4(),
            hour: getFormattedHour(),
            stattus: 'no-visto'
        }


        setContactsState((prev_contacts_state) =>
            prev_contacts_state.map(contact => {
                if (contact.id === Number(contact_id)) {
                    return {
                        ...contact,
                        messages: [...contact.messages, new_message],
                    }
                }
                return contact
            })
        )
    }

    return (
        <ContactsContext.Provider
            value={{
                contacts_state,
                getContactById,
                setContactsState,
                selected_contact,
                setSelectedContact,
                addNewMessage,
                isMobile,
            }}
        >
            {children}
        </ContactsContext.Provider>
    )
}


export { ContactsContext, ContactsContextProvider }
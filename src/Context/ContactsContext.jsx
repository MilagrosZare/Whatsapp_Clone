import { createContext, useState } from "react";
import React from 'react'
import contacts from "../data/messageData";


const ContactsContext = createContext(); //Nos devuelve un componente con nuestro contexto.

const ContactsContextProvider = ({ children }) => {

const [contacts_state, setContactsState] = useState(contacts)

const [selected_contact, setSelectedContact] = useState(null)


    const getContactById = (contact_id) => {
        return contacts_state.find(
            contact => contact.id === Number(contact_id))
        //Esta info se exporta en el value
    }

    return ( 
        <ContactsContext.Provider value={
            {
                contacts_state: contacts_state,
                getContactById: getContactById,
                setContactsState: setContactsState,
                selected_contact: selected_contact,
                setSelectedContact: setSelectedContact,
            }
        }
        >
            {children}
        </ContactsContext.Provider>
    )
}

export {ContactsContext, ContactsContextProvider }
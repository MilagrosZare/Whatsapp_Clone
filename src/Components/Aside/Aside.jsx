import React from 'react'
import './Aside.css'
import { BiMessageAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import ContactList from '../ContactList';


const Aside = () => {
    return (
        <aside className='container-contacts'>
            <div className='header-aside'>
                <div className='header-aside-top'>
                    <h1 className='aside-title'>Chats</h1>
                    <div className='aside-top-icons'>
                        <BiMessageAdd />
                        <BsThreeDotsVertical />
                    </div>
                </div>
                <div className='header-aside-searching'>
                    <IoSearchSharp />
                    <input type="text" name="searching" placeholder='Buscar' className='searching' />
                </div>
                <div className='header-aside-buttons'>
                    <button className='button-wpp'>Todos</button>
                    <button className='button-wpp'>No leídos</button>
                    <button className='button-wpp'>Favoritos</button>
                    <button className='button-wpp'>Grupos</button>
                </div>
            </div>
            <ContactList />
        </aside>
    )
}

export default Aside
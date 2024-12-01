import React from 'react'
import { FaLock } from "react-icons/fa";
import '../HomeScreen/HomeScreen.css'

const HomeScreen = () => {
  return (
    <div className='container-download'>
        <img src='/assets/whatsappParaWindows.png' alt="Descargar Whatsapp Para Windows" className='download-img' />
        <div className='container-text'>
        <span className='title-homescreen'>Descarga Whatsapp para Windows</span>
        <span className='text-homescreen'>Descarga la aplicación para Windows y haz llamadas, comparte pantalla y disfruta de una experiencia más rápida.</span>
        </div>
        <div className='container-text-bottom'>
            <button className='download-Microsoft'>Descargar de Microsoft Store</button>
            </div>
            <div className='personal-messages'>
        <FaLock/>
        <span>Tus mensajes personales están cifrados de extremo a extremo.</span>
        </div>
    </div>
  )
}

export default HomeScreen
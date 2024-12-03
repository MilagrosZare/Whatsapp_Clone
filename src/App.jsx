import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './normalize.css'
import HomeScreen from './Components/HomeScreen/HomeScreen'
import Chat from './Components/Chat/Chat'
import '/src/global.css'
import Aside from './Components/Aside/Aside'

function App() {

  return (
    <div className='full-screen'>
      <div className='always-show'>
        <Aside />
      </div>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/contact/:contact_id' element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App

import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './normalize.css';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import Chat from './Components/Chat/Chat';
import '/src/global.css';
import Aside from './Components/Aside/Aside';
import { ContactsContext } from './Context/ContactsContext';

function App() {
  const { isMobile } = useContext(ContactsContext);

  return (
    <div className="full-screen">
      {/* Mostrar Aside solo una vez */}
      {!isMobile && <Aside />}

      {/* Rutas principales */}
      <Routes>
        <Route path="/" element={isMobile ? <Aside /> : <HomeScreen />} />
        <Route path="/contact/:contact_id" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App

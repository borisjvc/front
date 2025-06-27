import './App.css'
import { Route, Routes } from 'react-router-dom'
import ContactForm from './assets/components/ContactForm'
import Home from './assets/components/Home'
import Terminos from './assets/components/Terminos'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<ContactForm />} />
      <Route path="/terminos-y-condiciones" element={<Terminos />} />
    </Routes>
  )
}

export default App

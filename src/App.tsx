import './App.css'
import { Route, Routes } from 'react-router-dom'
import ContactForm from './assets/components/ContactForm'
import Home from './assets/components/Home'
import Login from './assets/components/Login'
import Dashboard from './assets/components/Dashboard'
import Terminos from './assets/components/Terminos'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<ContactForm />} />
      <Route path="/terminos-y-condiciones" element={<Terminos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<div className="text-center text-red-500">Página no encontrada</div>} />
    </Routes>
  )
}

export default App

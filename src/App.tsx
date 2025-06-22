import './App.css'
import { Route, Routes } from 'react-router-dom'
import ContactForm from './assets/components/ContactForm'
import Home from './assets/components/Home'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacto" element={<ContactForm />} />
    </Routes>
  )
}

export default App

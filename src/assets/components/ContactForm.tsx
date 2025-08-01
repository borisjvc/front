import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaCommentDots,
} from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTermsAccepted(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage(null);

    // Validaciones
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?\d{7,15}$/; // admite + y 7-15 dígitos
    if (!emailRegex.test(formData.correo)) {
      setMessage({ type: 'error', text: 'Ingresa un correo electrónico válido.' });
      return;
    }
    if (formData.telefono && !phoneRegex.test(formData.telefono)) {
      setMessage({ type: 'error', text: 'Ingresa un teléfono válido (solo dígitos y opcional +).' });
      return;
    }
    if (!termsAccepted) {
      setMessage({ type: 'error', text: 'Debes aceptar los Términos y Condiciones.' });
      return;
    }
    if (!recaptchaToken) {
      setMessage({ type: 'error', text: 'Por favor, verifica el reCAPTCHA.' });
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API_URL}/contact`, { ...formData, recaptchaToken, terms: termsAccepted });
      setMessage({ type: 'success', text: '¡Mensaje enviado con éxito!' });
      setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
      setTermsAccepted(false);
      setRecaptchaToken(null);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage({ type: 'error', text: 'Hubo un error al enviar el mensaje. Intenta nuevamente más tarde.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 px-4 py-14 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl space-y-6 animate-fade-in"
      >
        <h2 className="text-3xl font-bold text-center text-blue-700">Contáctanos</h2>

        <div className="space-y-5">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre completo
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="bg-blue-100 px-3 text-blue-600">
                <FaUser />
              </span>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. Juan Pérez"
                className="w-full p-3 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Correo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Correo electrónico
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="bg-blue-100 px-3 text-blue-600">
                <FaEnvelope />
              </span>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Ej. juan@email.com"
                className="w-full p-3 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Teléfono */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Teléfono
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <span className="bg-blue-100 px-3 text-blue-600">
                <FaPhoneAlt />
              </span>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Ej. 555-123-4567"
                className="w-full p-3 focus:outline-none"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje
            </label>
            <div className="flex items-start border border-gray-300 rounded-lg overflow-hidden">
              <span className="bg-blue-100 px-3 py-3 text-blue-600">
                <FaCommentDots />
              </span>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Escribe tu mensaje aquí..."
                rows={6}
                className="w-full p-3 resize-none focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Términos y condiciones */}
        <div className="flex items-center justify-center text-sm">
          <input id="acepto" type="checkbox" checked={termsAccepted} onChange={handleCheckbox} required className="mr-2" />
          <label htmlFor="acepto" className="text-gray-700">
            Acepto los{' '}
            <Link
              to="/terminos-y-condiciones"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800 font-medium"
            >
              Términos y Condiciones
            </Link>
          </label>
        </div>

        {/* Redes sociales */}
        <div className="text-center mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Nuestras redes sociales
          </h3>
          <div className="flex justify-center gap-5 text-blue-600 text-xl">
            <a href="#" className="hover:text-blue-800 transition-all">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500 transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-green-600 transition-all">
              <FaWhatsapp />
            </a>
            <a href="#" className="hover:text-sky-400 transition-all">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6LfLhpcrAAAAAJOIgEjhZ1xWYvvnzna9Epmg39cG"
            onChange={handleRecaptchaChange}
          />
        </div>

        {message && (
          <p className={`text-center ${message.type === 'success' ? 'text-green-600' : 'text-red-600'} font-medium`}>{message.text}</p>
        )}

        {/* Botón */}
        <button
          type="submit"
          disabled={loading}
          className={`block mx-auto mt-4 bg-blue-600 text-white font-semibold py-3 px-8 rounded-xl transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:scale-105'}`}
        >
          {loading ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </section>
  );
}

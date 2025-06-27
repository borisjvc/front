import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: '',
  });

  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert('Por favor, verifica el reCAPTCHA.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/postForm', formData);
      console.log('Formulario enviado con éxito:', response.data);
      alert('¡Mensaje enviado con éxito!');

      // Limpiar el formulario y reCAPTCHA
      setFormData({
        nombre: '',
        correo: '',
        telefono: '',
        mensaje: '',
      });
      setRecaptchaToken(null);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm space-y-5">
        <h2 className="text-2xl font-bold text-center text-gray-800">Contáctanos</h2>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Ej. Juan Pérez"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Ej. juan@email.com"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            placeholder="Ej. 555-123-4567"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Mensaje</label>
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí..."
            rows={3}
            className="w-full border border-gray-300 p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <div className="flex items-start gap-2 text-sm">
  <input
    id="acepto"
    type="checkbox"
    required
    className="mt-1"
  />
  <label htmlFor="acepto" className="text-gray-700">
    Acepto los{' '}
    <a
      href="/terminos-y-condiciones"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 font-semibold underline hover:text-blue-800"
    >
      Términos y Condiciones
    </a>
  </label>
</div>


        {/* reCAPTCHA */}
        <div className="flex justify-center">
          <ReCAPTCHA
            sitekey="6LeS1G0rAAAAACs5kkX0oZHbGaFMxI6UfeoDnMoK" 
            onChange={handleRecaptchaChange}
          />
        </div>

          

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  );
}

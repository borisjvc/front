import { FaMicrochip } from 'react-icons/fa';
import { useState } from 'react';
import { sanitizeInput } from '../../utils/sanitize';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [loading, setLoading] = useState(false);
const [errorMsg, setErrorMsg] = useState('');
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
const navigate = useNavigate();

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setErrorMsg('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    setErrorMsg('Ingresa un correo electrónico válido');
    return;
  }
  if (password.length < 6) {
    setErrorMsg('La contraseña debe tener al menos 6 caracteres');
    return;
  }
  setLoading(true);
  try {
    const { data } = await axios.post(`${API_URL}/login`, { email, password });
    localStorage.setItem('token', data.token);
    navigate('/dashboard');
  } catch (err: any) {
    if (axios.isAxiosError(err) && err.response) {
      setErrorMsg(err.response.data?.message || 'Credenciales inválidas');
    } else {
      setErrorMsg('Error de red. Intenta nuevamente');
    }
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      
      <div
        className="hidden md:flex flex-col items-center justify-center bg-blue-600 text-white p-12 space-y-6 animate-fade-in"
        style={{
          backgroundImage: `url('/src/images/industry-components-and-research-electronic-design-electronic-design-keyvisual-rohde-schwarz_200_104856_2880_1620_6.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <FaMicrochip className="text-6xl animate-pulse" />
        <h2 className="text-3xl font-bold text-center">
          Bienvenido a <span className="text-yellow-300">ElectroComponentes</span>
        </h2>
        <p className="text-lg text-center max-w-sm">
          Accede a tu cuenta para gestionar tus pedidos, revisar tu historial o contactar con nuestro soporte.
        </p>
      </div>

        {/* Formulario de inicio de sesión */}
      <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 px-6 py-12">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm border-4 border-blue-600 animate-slide-in">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Iniciar Sesión</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(sanitizeInput(e.target.value))}
                placeholder="ejemplo@correo.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(sanitizeInput(e.target.value))}
                placeholder="••••••••"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {errorMsg && <p className="text-red-600 text-center text-sm">{errorMsg}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700 hover:scale-105'}`}
            >
              {loading ? 'Ingresando...' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

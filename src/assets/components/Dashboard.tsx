import { Link, useNavigate } from 'react-router-dom';
import { FaUsers, FaEnvelope, FaPhone, FaCommentDots, FaCircle, FaArrowLeft, FaSignOutAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function Dashboard() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeads = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setErrorMsg('Sesión expirada. Vuelve a iniciar sesión.');
        setLoading(false);
        return;
      }
      try {
        const { data } = await axios.get(`${API_URL}/leads`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setLeads(data.data || []);
      } catch (err: any) {
        if (axios.isAxiosError(err) && err.response?.status === 401) {
          setErrorMsg('No autorizado. Inicia sesión nuevamente.');
        } else {
          setErrorMsg('Error al cargar leads');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-3">
          <FaUsers className="text-blue-500 text-4xl" />
          Panel de Leads
        </h1>
        <button onClick={handleLogout} className="inline-flex items-center gap-2 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition">
          <FaSignOutAlt />
          Cerrar sesión
        </button>
      </div>

      {/* Botón volver */}
      <div className="mb-6 animate-fade-in">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition hover:underline"
        >
          <FaArrowLeft />
          Volver al inicio
        </Link>
      </div>

      {/* Tabla */}
      {loading ? (
        <p className="text-center text-blue-600">Cargando...</p>
      ) : errorMsg ? (
        <p className="text-center text-red-600">{errorMsg}</p>
      ) : (
        <div className="overflow-x-auto rounded-2xl shadow-lg bg-white animate-slide-in">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-blue-100 text-blue-800">
              <tr>
                <th className="px-6 py-4 text-left">Nombre</th>
                <th className="px-6 py-4 text-left">
                  <FaEnvelope className="inline mr-1" />
                  Correo
                </th>
                <th className="px-6 py-4 text-left hidden md:table-cell">
                  <FaPhone className="inline mr-1" />
                  Teléfono
                </th>
                <th className="px-6 py-4 text-left hidden lg:table-cell">
                  <FaCommentDots className="inline mr-1" />
                  Mensaje
                </th>
                <th className="px-6 py-4 text-left">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-blue-50 transition-all">
                  <td className="px-6 py-4 font-medium text-gray-800">{lead.nombre}</td>
                  <td className="px-6 py-4 text-gray-600">{lead.correo}</td>
                  <td className="px-6 py-4 hidden md:table-cell text-gray-600">{lead.telefono}</td>
                  <td className="px-6 py-4 hidden lg:table-cell text-gray-600">{lead.mensaje}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FaCircle className="text-green-500 text-xs" />
                      <span>Nuevo</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

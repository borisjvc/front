import { Link } from 'react-router-dom';
import { FaUsers, FaEnvelope, FaPhone, FaCommentDots, FaCircle, FaArrowLeft,
} from 'react-icons/fa';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 animate-fade-in">
        <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-3">
          <FaUsers className="text-blue-500 text-4xl" />
          Panel de Leads
        </h1>
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
            {Array.from({ length: 2 }).map((_, index) => (
              <tr key={index} className="hover:bg-blue-50 transition-all">
                <td className="px-6 py-4 font-medium text-gray-800">Juan Pérez</td>
                <td className="px-6 py-4 text-gray-600">juan@email.com</td>
                <td className="px-6 py-4 hidden md:table-cell text-gray-600">
                  555-123-4567
                </td>
                <td className="px-6 py-4 hidden lg:table-cell text-gray-600">
                  Estoy interesado en sus servicios.
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <FaCircle className="text-green-500 text-xs" />
                    <select className="border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-400">
                      <option value="nuevo">Nuevo</option>
                      <option value="contactado">Contactado</option>
                      <option value="descartado">Descartado</option>
                    </select>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

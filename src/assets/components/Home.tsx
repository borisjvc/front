import { Link } from 'react-router-dom';
import { FaMicrochip, FaTools, FaBolt, FaShippingFast, FaCogs } from 'react-icons/fa';

export default function Home() {
  return (
    <section
      className="w-full min-h-screen flex items-center justify-center px-4 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('/src/images/electronics-processor-and-motherboard-glve3zciuxc1j4gm.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Columna de texto */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight animate-fade-in">
            Tu tienda de <span className="text-blue-600">componentes electrónicos</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 animate-fade-in delay-100">
            Encuentra lo que necesitas: resistencias, sensores, microcontroladores, cables, herramientas y mucho más. Envíos rápidos y soporte especializado.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6 animate-fade-in delay-200">
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <FaMicrochip className="text-blue-600 text-2xl" />
              <span className="text-gray-700 font-medium">Microchips</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <FaTools className="text-blue-600 text-2xl" />
              <span className="text-gray-700 font-medium">Herramientas</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <FaBolt className="text-yellow-500 text-2xl" />
              <span className="text-gray-700 font-medium">Energía</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <FaShippingFast className="text-green-600 text-2xl" />
              <span className="text-gray-700 font-medium">Envíos rápidos</span>
            </div>
          </div>

          <Link
            to="/contacto"
            className="inline-block mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300 animate-fade-in delay-300"
          >
            Contáctanos
          </Link>
        </div>

        {/* ilustración */}
        <div className="flex justify-center space-x-10 text-blue-600 text-7xl md:text-8xl">
          <FaMicrochip className="animate-bounce" />
          <FaTools className="animate-spin-slow" />
          <FaBolt className="animate-pulse" />
          <FaCogs className="animate-spin" />
        </div>
      </div>
    </section>
  );
}

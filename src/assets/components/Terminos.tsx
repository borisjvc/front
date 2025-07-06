import { FaShieldAlt, FaUserShield, FaLock, FaFileContract, FaSyncAlt, FaEnvelopeOpenText, } from 'react-icons/fa';

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-6 py-16 flex flex-col items-center animate-fade-in">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-2xl space-y-8">
        {/* Encabezado */}
        <div className="flex flex-col items-center text-center space-y-2">
          <FaShieldAlt className="text-blue-600 text-5xl animate-bounce" />
          <h1 className="text-3xl font-bold text-blue-700">Términos y Condiciones</h1>
          <p className="text-gray-600 text-sm">
            Última actualización: julio 2025
          </p>
        </div>

        {/* Secciones */}
        <div className="space-y-8 text-gray-700 text-sm sm:text-base leading-relaxed">
          {/* Uso del Servicio */}
          <div className="flex items-start gap-4">
            <FaFileContract className="text-blue-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-blue-700 mb-1">1. Uso del servicio</h2>
              <p>
                Este sitio está destinado exclusivamente a fines informativos. Te comprometes a
                no utilizarlo para fines ilegales, fraudulentos o no autorizados.
              </p>
            </div>
          </div>

          {/* Privacidad */}
          <div className="flex items-start gap-4">
            <FaLock className="text-blue-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-blue-700 mb-1">2. Privacidad</h2>
              <p>
                Respetamos tu privacidad. La información que proporcionas será utilizada
                únicamente para fines de contacto o soporte, conforme a nuestra política de
                privacidad.
              </p>
            </div>
          </div>

          {/* Propiedad intelectual */}
          <div className="flex items-start gap-4">
            <FaUserShield className="text-blue-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-blue-700 mb-1">3. Propiedad intelectual</h2>
              <p>
                Todos los contenidos de este sitio (textos, imágenes, logotipos, etc.) están
                protegidos por derechos de autor y pertenecen a sus respectivos propietarios.
              </p>
            </div>
          </div>

          {/* Cambios */}
          <div className="flex items-start gap-4">
            <FaSyncAlt className="text-blue-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-blue-700 mb-1">4. Cambios en los términos</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento.
                Recomendamos revisar esta sección periódicamente para estar informado.
              </p>
            </div>
          </div>

          {/* Contacto */}
          <div className="flex items-start gap-4">
            <FaEnvelopeOpenText className="text-blue-500 text-xl mt-1" />
            <div>
              <h2 className="text-lg font-semibold text-blue-700 mb-1">5. Contacto</h2>
              <p>
                Para dudas o comentarios sobre estos términos, puedes contactarnos mediante el
                formulario en nuestra sección de contacto o por correo electrónico.
              </p>
            </div>
          </div>
        </div>

        {/* Botón de volver */}
        <div className="flex justify-center pt-6">
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

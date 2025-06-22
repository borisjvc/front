export default function ContactForm() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <form className="bg-white p-6 rounded-xl shadow-lg w-full max-w-sm space-y-5">
        <h2 className="text-2xl font-bold text-center text-gray-800">Contáctanos</h2>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Nombre completo</label>
          <input
            type="text"
            name="nombre"
            placeholder="Ej. Juan Pérez"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Correo electrónico</label>
          <input
            type="email"
            name="correo"
            placeholder="Ej. juan@email.com"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="tel"
            name="telefono"
            placeholder="Ej. 555-123-4567"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">Mensaje</label>
          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            rows={3}
            className="w-full border border-gray-300 p-2 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
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

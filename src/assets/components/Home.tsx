import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-center justify-center px-4">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
          Bienvenido a Nuestra Página
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Ofrecemos soluciones modernas y efectivas para ayudarte a crecer. Contáctanos y déjanos ser parte de tu proyecto.
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Contáctanos
        </Link>
      </div>
    </section>
  )
}

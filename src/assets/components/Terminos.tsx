export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 px-6 py-10 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Términos y Condiciones
        </h1>

        <section className="space-y-6 text-justify leading-relaxed text-sm sm:text-base">
          <p>
            Bienvenido/a. Al utilizar nuestro sitio web y servicios, aceptas cumplir con los siguientes términos y condiciones. Por favor, léelos cuidadosamente antes de continuar.
          </p>

          <div>
            <h2 className="text-blue-600 font-semibold text-lg mb-2">1. Uso del servicio</h2>
            <p>
              El acceso y uso de este sitio es exclusivamente para fines informativos. Te comprometes a no utilizarlo para actividades ilegales o no autorizadas.
            </p>
          </div>

          <div>
            <h2 className="text-blue-600 font-semibold text-lg mb-2">2. Privacidad</h2>
            <p>
              Respetamos tu privacidad. Los datos proporcionados a través de formularios serán utilizados únicamente con fines de contacto o servicio, según lo especificado.
            </p>
          </div>

          <div>
            <h2 className="text-blue-600 font-semibold text-lg mb-2">3. Propiedad intelectual</h2>
            <p>
              Todo el contenido del sitio, incluyendo textos, imágenes, logotipos y diseño, pertenece a sus respectivos propietarios y está protegido por derechos de autor.
            </p>
          </div>

          <div>
            <h2 className="text-blue-600 font-semibold text-lg mb-2">4. Cambios en los términos</h2>
            <p>
              Nos reservamos el derecho de actualizar estos términos en cualquier momento. Te recomendamos revisarlos periódicamente para estar al tanto de posibles cambios.
            </p>
          </div>

          <div>
            <h2 className="text-blue-600 font-semibold text-lg mb-2">5. Contacto</h2>
            <p>
              Si tienes alguna pregunta sobre estos términos, puedes contactarnos a través del formulario del sitio o enviarnos un correo.
            </p>
          </div>

          <p className="text-sm text-center text-gray-500 mt-10">
            Última actualización: junio 2025
          </p>
        </section>
      </div>
    </div>
  );
}

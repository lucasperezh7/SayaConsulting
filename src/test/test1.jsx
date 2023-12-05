import React from "react";

const Test = () => {
  return (
    <section className="bg-gray-100 py-48">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 mr-">
            <h2 className=" text-4xl font-bold text-gray-800 mb-6">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg text-justify">
              En Saya Consulting, nos enorgullece ser su socio de confianza en
              asuntos personales en España. Desde nuestra fundación en [año de
              fundación], hemos estado dedicados a brindar un servicio de
              calidad y cercanía a nuestros clientes durante más de [número de
              años] años. Nuestra pasión por nuestro trabajo y nuestra constante
              búsqueda de la excelencia nos impulsa a ofrecer siempre lo mejor a
              cada uno de nuestros valiosos clientes.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h2 className=" text-4xl font-bold text-gray-800 mb-6">
              Nuestros clientes opinan:
            </h2>
            <div className="mr-4 text-justify">
              <p className="text-gray-600 leading-relaxed text-lg mb-7">
                "Una Asociación Valiosa" "Desde el momento en que contratamos
                los servicios de [Tu Nombre de Empresa], nuestra empresa ha
                experimentado un crecimiento significativo. Su compromiso con la
                excelencia y su enfoque personalizado nos han permitido abordar
                desafíos complejos de manera efectiva. ¡Son un verdadero socio
                en nuestro éxito!" - "Ian"
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-7">
                "Confianza y Tranquilidad" "La confianza es esencial en nuestro
                negocio, y [Tu Nombre de Empresa] la ha ganado plenamente. Su
                enfoque en la integridad y la confidencialidad es insuperable.
                Sabemos que nuestros asuntos están en buenas manos con ellos". -
                "Sophie"
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                "Excelente Equipo Humano" "Detrás de cada éxito de [Tu Nombre de
                Empresa] se encuentra un equipo apasionado y dedicado. Siempre
                se muestran dispuestos a escuchar nuestras necesidades y brindar
                soluciones efectivas. ¡Es un placer trabajar con ellos!" -
                "Josh"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Test;

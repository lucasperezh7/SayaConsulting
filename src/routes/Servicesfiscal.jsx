import React, { useEffect } from "react";
import Header from "../components/Header";
import { motion, useAnimation } from "framer-motion";

const Servicesfiscal = () => {
  const controls = useAnimation();

  // Cuando el componente se monta, inicia la animación
  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <>
      <Header />
      <section className="bg-blue-200 py-32">
        <div className="container bg-blue-200 mx-auto px-8">
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <motion.h2
                className="text-3xl font-bold text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                transition={{ duration: 1.5 }}
              >
                Nuestra Experiencia en Consultoría Fiscal:
              </motion.h2>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="mr-4 text-justify">
                <motion.div
                  className="bg-white rounded-xl p-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 1.2, delay: 0.2 }}
                >
                  <h2 className="text-xl font-semibold ">
                    En el ámbito fiscal, ofrecemos soluciones especializadas que
                    ayudan a las empresas a navegar por un entorno normativo en
                    constante cambio. Nuestro equipo de expertos fiscales está
                    dedicado a brindar asesoría estratégica y cumplimiento
                    riguroso.
                  </h2>
                </motion.div>
                <motion.div
                  className="bg-white rounded-xl p-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  <h2 className="text-xl font-semibold">
                    Nuestra comprensión profunda de las leyes fiscales y
                    regulaciones nos permite proporcionar estrategias de
                    planificación fiscal efectivas. Ayudamos a optimizar la
                    estructura fiscal de las empresas, maximizando beneficios y
                    minimizando riesgos.
                  </h2>
                </motion.div>
                <motion.div
                  className="bg-white rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 1.2, delay: 0.6 }}
                >
                  <h2 className="text-xl font-semibold">
                    Trabajamos en colaboración con nuestros clientes para
                    abordar desafíos fiscales específicos. Ya sea en la
                    reducción de la carga tributaria o en la preparación de
                    informes financieros precisos, nuestra consultoría está
                    diseñada para lograr resultados positivos.
                  </h2>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Servicesfiscal;

import React, { useEffect } from "react";
import Header from "../components/Header";
import { motion, useAnimation } from "framer-motion";

const Servicesadmin = () => {
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
                Nuestro rol en el Ámbito Administrativo:
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
                    Desempeñamos un papel crucial en el ámbito administrativo al
                    ofrecer soluciones que optimizan procesos y promueven la
                    eficiencia. A través de nuestra experiencia en gestión y
                    tecnología, ayudamos a las organizaciones a enfrentar los
                    desafíos administrativos modernos.
                  </h2>
                </motion.div>
                <motion.div
                  className="bg-white rounded-xl p-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  <h2 className="text-xl font-semibold">
                    Nuestra tecnología y enfoque orientado a datos permiten un
                    análisis exhaustivo de los procedimientos administrativos.
                    Identificamos áreas de mejora y aplicamos soluciones
                    innovadoras para simplificar flujos de trabajo y aumentar la
                    productividad.
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
                    entender sus necesidades específicas. Esto nos permite
                    adaptar nuestras soluciones y estrategias para abordar los
                    desafíos únicos que enfrenta su organización en el ámbito
                    administrativo.
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

export default Servicesadmin;

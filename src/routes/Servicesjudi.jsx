import React, { useEffect } from "react";
import Header from "../components/Header";
import { motion, useAnimation } from "framer-motion";

const Servicesjudi = () => {
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
                Nuestra Consultoría en el Ámbito Judicial:
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
                    Reconocemos que los procesos judiciales pueden ser
                    engorrosos y consumir recursos valiosos. Aquí es donde
                    entramos en juego para optimizar estos procesos. Mediante la
                    identificación de áreas de mejora, introducimos eficiencias
                    que permiten a los abogados y sus equipos centrarse en la
                    estrategia legal en lugar de perder tiempo en tareas
                    administrativas.
                  </h2>
                </motion.div>
                <motion.div
                  className="bg-white rounded-xl p-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 1.2, delay: 0.4 }}
                >
                  <h2 className="text-xl font-semibold">
                    Nuestra tecnología y enfoque orientado a datos también
                    contribuyen a la toma de decisiones informadas y oportunas.
                    Confidencialidad y Ética: Entendemos la sensibilidad de la
                    información en el ámbito judicial y nos comprometemos con
                    los más altos estándares de confidencialidad y ética.
                  </h2>
                </motion.div>
                <motion.div
                  className="bg-white rounded-xl p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  transition={{ duration: 1.2, delay: 0.6 }}
                >
                  <h2 className="text-xl font-semibold">
                    Trabajamos en estrecha colaboración con nuestros clientes
                    para salvaguardar la privacidad y la integridad de los casos
                    en los que estamos involucrados.
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
export default Servicesjudi;

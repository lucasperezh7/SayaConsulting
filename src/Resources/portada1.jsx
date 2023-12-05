import { motion } from "framer-motion";
import Panora from "../Images/vale.jpeg";

const Portada1 = () => {
  return (
    <>
      <div className="mt-10 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center ">
          <div className="flex items-center">
            <div className="text-center  justify-center  leading-relaxed">
              <motion.div
                className="flex items-center justify-center text-center"
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 60 }}
                transition={{ duration: 3.0, delay: 0.5 }}
              >
                <div className="mr-2 sm:mr-32 ml-2 sm:ml-24 mb-2 sm:mb-32 text-center">
                  <h1 className="text-4xl sm:text-6xl text-center font-bold py-2 sm:py-">
                    Bienvenido a{" "}
                  </h1>
                  <h1 className="text-4xl sm:text-6xl text-center font-bold py-2 sm:py-8">
                    SayaConsulting
                  </h1>
                  <h2 className="text-2xl sm:text-4xl pt-2 sm:pt-8 leading-relaxed">
                    Tu consultora de confianza en España.
                  </h2>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex sm:space-x-6 border-gray-300">
            <div className="flex flex-col sm:flex-row ml-2 sm:ml-6 mb-2 sm:mb-0 rounded-lg">
              <motion.div
                className="h-screen flex items-center justify-center"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3.0, delay: 0.5 }}
              >
                <div className="flex-1 flex items-center justify-center">
                  <img
                    className="object-cover bg-gradient-to-l p-2 sm:p-4 ml-2 sm:ml-20 mr-2 sm:mr-0 mt-2 sm:mt-9 rounded-3xl h-auto mx-auto w-full sm:w-10/12"
                    src={Panora}
                    alt="Imagen"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portada1;

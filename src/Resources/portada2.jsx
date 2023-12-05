import { motion } from "framer-motion";

export default function Portada2() {
  return (
    <div className="">
      <div className="flex items-center justify-center h-2 mr-32 ml-32 mb-60 mt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
          className="text-center title-with-letter-spacing"
        >
          <motion.h1 className="text-4xl font-bold text-gray-800 mt-5">
            Auténticos profesionales comprometidos en <br /> brindar soluciones
            excepcionales.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl pt-8 leading-relaxed text-gray-600"
          >
            Especialistas en trabajar con público extranjero, tramitamos todas
            las necesidades a nivel financiero, administrativo y legal.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

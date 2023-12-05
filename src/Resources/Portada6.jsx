import React, { useState } from "react";
import { motion } from "framer-motion";
import Foto1 from "../Images/sabine.jfif";
import Foto2 from "../Images/yago.jpeg";
const Portada5 = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showImage, setShowImage] = useState(false); // Estado para controlar la visibilidad de la imagen

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    setShowImage(true); // Mostrar la imagen cuando se hace clic en la tarjeta
  };

  return (
    <div className="mt-32 flex justify-center items-center h-3/6 bg-gray-100">
      <motion.div
        className={`w-1/3 h-auto ml-20 bg-yellow-100 p-6 ${
          isFlipped ? "transform rotateY(180deg)" : ""
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="text-stone-950 text-3xl">Sabine Tegat</h2>
        <p className="text-justify mt-2 text-xl mb-10">
          {" "}
          Sabine domina 5 idiomas y cuenta con una experiencia de más de 25 años
          en banca y más de 8 en asesoría, orientada a clientes extranjeros
          particulares a quienes ayuda y acompaña con profesionalidad, cercanía,
          honestidad y humanidad.{" "}
        </p>
        {isFlipped && showImage && (
          <img
            src={Foto1} // Reemplaza con la ruta de tu imagen
            alt="Imagen"
            className="mx-auto object-cover border border-white w-72 h-72" // Estilo para la imagen
          />
        )}
      </motion.div>

      {/* Repite el mismo código para la segunda tarjeta */}
      <motion.div
        className={`w-1/3 h-auto mr-20 bg-amber-100 p-6 ${
          isFlipped ? "transform rotateY(180deg)" : ""
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="text-neutral-950 text-3xl">Yago Conesa</h2>
        <p className="text-justify neutral-950 mt-2 text-xl mb-10">
          Yago es abogado y asesor fiscal colegiado y titulado en España, con
          estudios de Máster especializados en fiscalidad en España. Cuenta con
          experiencia profesional de más de 7 años en despachos y asesorías
          dedicadas a asesoramiento de impuestos y todo tipo de cuestiones
          fiscales para clientes extranjeros. Con un trato profesional, cercano
          y empático, ambos unen sus virtudes para servir y ayudar a sus
          clientes en España.
        </p>
        {isFlipped && showImage && (
          <img
            src={Foto2}
            alt="Imagen"
            className="mx-auto object-cover border border-white w-72 h-72" // Estilo para la imagen
          />
        )}
      </motion.div>
    </div>
  );
};

export default Portada5;

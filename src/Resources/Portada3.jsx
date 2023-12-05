import React, { useState } from "react";
import { motion } from "framer-motion";
import "../index.css";

function Portada3() {
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    if (mouseX > 200) {
      // Cambia este valor según tu punto de referencia en el eje X
      setHovered(true);
    } else {
      setHovered(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center bg-white"
      onMouseMove={handleMouseMove}
    >
      <div className="">
        <motion.h1
          className={`hover-title ${hovered ? "hovered" : ""}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5 }}
        >
          <h1 className="title-with-letter-spacing text-black text-center">
            {" "}
            Conoce nuestros servicios:
          </h1>
        </motion.h1>
      </div>
    </div>
  );
}

export default Portada3;

//Ahora viene un separador

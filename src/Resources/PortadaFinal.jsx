import React from "react";
import Contact from "./Contact";
import Saya from "../assets/SayaConsulting.svg";
const Portada = () => {
  // Función para manejar el clic en el botón de contacto
  const handleContactClick = () => {
    // Aquí puedes agregar la lógica para abrir un modal o redirigir a la página de contacto
    alert("¡Haz clic en el botón de contacto!");
  };

  return (
    <>
      {" "}
      <div
        className="h-screen flex flex-col justify-center items-center bg-cover"
        style={{
          backgroundImage: "url('ruta_de_tu_imagen.jpg')", // Reemplaza con la ruta de tu imagen de fondo
        }}
      >
        <h1 className="text-5xl text-black mb-12">¡Gracias por su visita!</h1>
        <h2 className="text-2xl text-black mb- text-center">
          Ahora, no dude en ponerse en contacto con nosotros. Resolveremos todas
          sus dudas e intereses.
        </h2>
        <img
          src={Saya}
          className=" mt-24 ml- flex justify-center items-center h-auto"
          alt=""
        />
      </div>
    </>
  );
};

export default Portada;

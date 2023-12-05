import React from "react";
import Header from "../components/Header";
const Location = () => {
  return (
    <div className="flex">
      <Header />
      <div className="w-1/2 p-4">
        <p className="text-lg font-bold mb-44">
          Descubre nuestro paraíso en la ciudad
        </p>
        <p className="text-gray-700">
          ¿Buscas un lugar excepcional para satisfacer tus necesidades? ¡No
          busques más! Nuestro negocio se encuentra en un rincón verdaderamente
          encantador de la ciudad. Rodeado de belleza natural y comodidades
          urbanas, es el lugar perfecto para vivir experiencias inolvidables.
          Ven y únete a nosotros en este oasis de calidad y servicio, donde lo
          extraordinario es lo cotidiano. ¡Te esperamos en nuestro paraíso en la
          ciudad!
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="URL de la imagen"
          alt="Negocio en un lugar fantástico"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Location;

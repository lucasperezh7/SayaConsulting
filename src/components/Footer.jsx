import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white p-8 mt-2 rounded shadow-md">
      <div>
        <h3 className="text-2xl font-semibold mb-4">Localización</h3>
        <p className="text-xl mb-2">CENTRO COMERCIAL L´ARABI PLAZA</p>
        <p className="text-xl">Calle Tabarca s/n PLANTA 2 LOCAL 2A</p>
        <p className="text-xl">03580 Alfaz del Pi (Alicante)</p>
      </div>

      <div className="container mx-auto text-right mr-">
        <h3 className="text-2xl font-semibold mb-4">Contáctanos</h3>
        <p className="text-xl mb-2">
          Correo electrónico: sabine@sayaconsulting.es
        </p>
        <p className="text-xl">Teléfono: +34 604535896</p>
      </div>
    </footer>
  );
};

export default Footer;

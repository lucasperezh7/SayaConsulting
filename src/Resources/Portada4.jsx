import React from "react";
import Foto from "../assets/Card2.svg";

import Foto2 from "../images/grafico.png";
import { Link } from "react-router-dom";

function Portada4() {
  return (
    <div className="flex flex-wrap justify-center mt-4 space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="rounded-xl p-4 md:p-6 bg-slate-300 hover:bg-gray-300 transition transform hover:scale-105 h-80 flex flex-col justify-center items-center">
          <Link to="/Servicesfiscal#top">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-4">
              Gestión Fiscal y Financiera
            </h1>
            <img className="w-32 h-32 md:w-40 md:h-40" src={Foto} alt="" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="rounded-xl p-4 md:p-6 bg-slate-300 hover:bg-gray-350 transition transform hover:scale-105 h-80 flex flex-col justify-center items-center">
          <Link to="/Servicesadmin#top">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-4">
              Gestión Administrativa
            </h1>
            <img className="w-32 h-32 md:w-40 md:h-40" src={Foto2} alt="" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="rounded-xl p-4 md:p-6 bg-slate-300 hover:bg-gray-300 transition transform hover:scale-105 h-80 flex flex-col justify-center items-center">
          <Link to="/Servicesjudi">
            <h1 className="text-xl md:text-2xl font-bold text-center mb-4">
              Gestión Judicial
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portada4;

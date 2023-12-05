import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Contact from "../Resources/Contact";
import Saya from "../assets/SayaConsulting.svg";

export default function Desplegable() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 h-24 mb-1 border-b-4 border-stone-300">
      <motion.div
        initial={{ borderBottomWidth: 0 }}
        animate={{ borderBottomWidth: 2 }}
        transition={{ duration: 0.5 }}
        style={{
          borderBottomStyle: "solid",
          borderBottomColor: "skyblue", // Cambia el color aquí
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="border-b-2 border-stone-100"
        />
      </motion.div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img className="h-20 w-96" src={Saya} alt="Logo de la empresa" />
          </Link>
        </div>

        <nav className="sm:pl-4 lg:pl-60 font-semibold text-xl">
          <ul className="sm:flex sm:items-center sm:ml-6 space-x-10">
            <li>
              <Link to="/" className="text-gray-800 hover:text-yellow-950">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/Aboutus"
                className="text-gray-800 hover:text-yellow-950"
              >
                Sobre nosotros
              </Link>
            </li>
            <li>
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="text-gray-800 text- py-2 px-4 focus:outline-none"
                  onClick={toggleDropdown}
                >
                  Servicios
                </button>
                {isOpen && (
                  <div className="absolute z-10 mt-2 w-auto bg-white border rounded shadow">
                    <ul>
                      <li>
                        <a
                          href="/Servicesadmin"
                          className="block px-4 py-2 text-xl text-gray-700 hover:bg-blue-200"
                        >
                          Administrativo
                        </a>
                      </li>
                      <li>
                        <a
                          href="/Servicesfiscal"
                          className="block px-4 py-2 text-xl text-gray-700 hover:bg-blue-200"
                        >
                          Fiscal
                        </a>
                      </li>
                      <li>
                        <a
                          href="/Servicesjudi"
                          className="block px-4 py-2 text-xl text-gray-700 hover:bg-blue-200"
                        >
                          Judicial
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>

        <div className="flex items-center pr-4 sm:pr-14">
          <Contact />
        </div>
      </div>
    </header>
  );
}

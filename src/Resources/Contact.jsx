import React from "react";
import { useState } from "react";

function Contact({ onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleClick = (event) => {
    if (event.target.id === "modal-overlay") {
      setIsOpen(false);
      onClose();
    }
  };
  return (
    <>
      <button
        onClick={openModal}
        className="px-6 py-3 font-semibold text-base text-white bg-sky-800 rounded-lg
             hover:bg-sky-600 focus:outline-none hover:ring-none hover:ring-yellow-950 transition-colors duration-450 ease-in-out focus:opacity-80 focus:scale-105"
      >
        Contacto
      </button>
      {isOpen && (
        <div
          id="modal-overlay"
          onClick={handleClick}
          className=" fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center"
        >
          <div className="bg-white rounded-lg shadow-lg w-1/3 h-max">
            <div className="px-6 py-4">
              <div className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800 text-center">
                  ¡Ponte en contacto con nosotros!
                </h2>
                <h3 className="text-2xl font-bold text-gray-800"></h3>
              </div>
              <div>
                <div className="mb-6">
                  <label
                    htmlFor=""
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Nombre:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-200 border border-gray-400 rounded py-2 px-4 w-full"
                  />{" "}
                  <label
                    htmlFor=""
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-200 border border-gray-400 rounded py-2 px-4 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Mensaje:
                  </label>
                  <textarea
                    type="text"
                    id="text"
                    className="bg-gray-200 border border-gray-400 rounded py-5 px- w-full"
                  />
                </div>
                <div className="flex justify-center px-6 py-9">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
            <div className="px-6 py-4">
              <button
                onClick={closeModal}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;

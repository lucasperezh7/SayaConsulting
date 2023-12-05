function Navbar() {
  return (
    <nav className="pl-60 font-semibold">
      <ul className="hidden sm:flex sm:items-center sm:ml-6 space-x-10">
        <li>
          <Link to="/" className="text-lg text-gray-800 hover:text-yellow-950">
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/Aboutus"
            className="text-lg text-gray-800  hover:text-yellow-950"
          >
            About us
          </Link>
        </li>
        <li>
          <div className="relative inline-block text-left ">
            <button
              type="button"
              className="text-gray-800 text-lg py-2 px-4 focus:outline-none"
              onClick={toggleDropdown}
            >
              Services
            </button>
            {isOpen && (
              <div className="absolute z-10 mt-2 w-32 bg-white border rounded shadow">
                <ul>
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200"
                    >
                      Administrativo
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200"
                    >
                      Fiscal
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-200"
                    >
                      Judicial
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
        <li>
          <Link to="" className="text-lg text-gray-800 hover:text-yellow-950">
            Location
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

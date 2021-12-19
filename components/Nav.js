import React from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap font-para">
        <div className="w-full fixed z-50">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-primary border border-primary">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto px-0 md:px-4 lg:static lg:block lg:justify-start">
                <a
                  className="text-sm md:text-md inline-block mr-4 py-2 b-nspace-nowrap text-b-n tracking-widest"
                  href="#"
                >
                 WORK FRIENDRY CAFE - VAN
                </a>
                <button
                  className="text-b-n cursor-pointer text-sm leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <div className="bg-b-n w-1 h-1 rounded-full"></div>
                  <div className="bg-b-n w-1 h-1 rounded-full mt-1"></div>
                  <div className="bg-b-n w-1 h-1 rounded-full mt-1"></div>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                }
              >
                <ul className="flex flex-col mt-3 lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <a
                      className="tracking-wider	px-3 py-2 flex items-center text-xs uppercase leading-snug text-b-n hover:opacity-75"
                      href="#find-cafes"
                    >
                      FIND CAFES
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="tracking-wider px-3 py-2 flex items-center text-xs uppercase leading-snug text-b-n hover:opacity-75"
                      href="#request"
                    >
                      SEND CAFE INFO
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
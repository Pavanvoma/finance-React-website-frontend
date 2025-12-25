import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menuitems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Financial Service", link: "/Finicialservice" },
    { name: "Become a Connector", link: "/becomeaconnector" },
    { name: "Contacts", link: "/contacts" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 bg-white z-50">
      <div className="flex items-center justify-between px-8 py-4 relative">
        {/* Logo */}
        <img
          src="https://chakrafin.com/images/logo.png"
          className="w-40 h-12"
          alt="logo"
        />

        {/* Desktop Menu (lg+) */}
        <ul className="hidden lg:flex gap-6 font-bold">
          {menuitems.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="hover:text-blue-600">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        
        <button
          className=" lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          <GiHamburgerMenu />
        </button>

       
        <div
          className={` lg:hidden absolute right-0 top-full mt-2 w-56
          bg-cyan-300 rounded-lg shadow-lg transition-all duration-300
          ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
        >
          <ul className="flex flex-col gap-4 p-4 font-bold">
            {menuitems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className="hover:text-blue-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

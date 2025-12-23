

import { Link } from "react-router-dom";

function Navbar(){
    const menuitems=[
        {
            name:"home", link:"/"
        },
        {
            name:"about", link:"/about"
        },
        {
            name:"services", link:"/services"
        },
        {
            name:"Finicial service", link:"/Finicialservice"

        },
        {
          name:"Become a connector", link:"/becomeaconnector"
        },
        {
           name:"contacts", link:"/contacts"
        }
    ]
    return(
            <nav className="w-full">
  <div className="flex items-center justify-between px-8 py-4 bg-white fixed top-0 left-0 w-full z-50 duration-1000">
     <div className="w-1/2 flex items-center">
      <img
        src="https://chakrafin.com/images/logo.png"
        className="w-40 h-12"
        alt="logo"
      />
    </div>

    <div className="flex w-1/2 justify-center">
      <ul className="flex gap-6 items-center font-bold">
        {menuitems.map((item, index) => (
          <li key={index}>
      <Link to={item.link} className="hover:text-blue-600">
        {item.name}
      </Link>
    </li>
        ))}
      </ul>
    </div>

  </div>
</nav>

        
        
    )
}
export default Navbar;
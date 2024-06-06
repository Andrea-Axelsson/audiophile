/* import { Link } from "react-router-dom"; */
import Logo from "/assets/shared/desktop/logo.svg"
import Hamburger from "/assets/shared/tablet/icon-hamburger.svg"
import Cart from "/assets/shared/desktop/icon-cart.svg"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-secondary-100 h-20 flex justify-center relative items-center px-6 md:px-10 lg:px-40 w-auto">
      <div className="flex justify-between items-center flex-grow px-4">
        <img className="block lg:hidden" src={Hamburger} alt="Hamburger menu"/>
        <Link
        to={"/"}
        >
          <img src={Logo} alt="Logo"/>
        </Link>
        
        <nav className="flex-1 hidden lg:block">
        <ul className="flex justify-center gap-10 items-center font-manrope tracking-2 font-bold text-white">
          <Link to={"/"} className="hover:text-primary-100 cursor-pointer">
            HOME
          </Link>
          <Link
            to={"category"}
            /* onClick={() => setCurrent("Headphones")} */
            className="hover:text-primary-100 cursor-pointer"
          >
            HEADPHONES
          </Link>
          <Link
            to={"category"}
            /* onClick={() => setCurrent("Speakers")} */
            className="hover:text-primary-100 cursor-pointer"
          >
            SPEAKERS
          </Link>
          <Link
            to={"category"}
            /* onClick={() => setCurrent("Earphones")} */
            className="hover:text-primary-100 cursor-pointer"
          >
            EARPHONES
          </Link>
        </ul>
      </nav>
        <img src={Cart} alt="Cart"/>
      </div>
      
    </header>
  )
}

export default Navbar
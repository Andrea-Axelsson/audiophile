import Logo from "/assets/shared/desktop/logo.svg"
import Hamburger from "/assets/shared/tablet/icon-hamburger.svg"
import Cart from "/assets/shared/desktop/icon-cart.svg"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import CartModal from "./CartModal"


const Navbar = () => {
  const totalQuant = useSelector((state: RootState) => state.cart.totalQuantity)

  console.log("CAAAAAAART STATE", totalQuant)


  return (
    <header className="bg-secondary-100 h-20 flex justify-center relative items-center px-6 md:px-10 lg:px-40 w-auto">
      <div className="bg-white absolute right-4 top-4 rounded-md ml-4">
      <CartModal/>
      </div>
      
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
            to={"/category/headphones"}
            className="hover:text-primary-100 cursor-pointer"
          >
            HEADPHONES
          </Link>
          <Link
            to={"/category/speakers"}
            className="hover:text-primary-100 cursor-pointer"
          >
            SPEAKERS
          </Link>
          <Link
            to={"/category/earphones"}
            className="hover:text-primary-100 cursor-pointer"
          >
            EARPHONES
          </Link>
        </ul>
      </nav>
        
        <div className="h-full w-12 flex justify-end relative pr-5 items-center">
        {totalQuant && totalQuant >= 1 ? (
          <div className="h-5 flex justify-center items-center bottom-3 right-2 rounded-full w-5 bg-primary-100 absolute">
          <p className="text-14 font-bold text-white">{totalQuant}</p>
        </div>

        ): ""}
       <img src={Cart} alt="Cart"/>
      </div>
      </div>
      
    </header>
  )
}

export default Navbar





/* 
const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    if(cartState){
      const total = cartState.reduce((sum:number, item: CartItem) => {
        return sum + item.quantity
      }, 0)
      setTotalQuantity(total)
      console.log("TOTAL", totalQuantity)
    }
    
  }, [cartState]) */
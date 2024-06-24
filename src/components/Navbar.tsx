import Logo from "/assets/shared/desktop/logo.svg"
import Hamburger from "/assets/shared/tablet/icon-hamburger.svg"
import Cart from "/assets/shared/desktop/icon-cart.svg"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "../app/store"
import CartModal from "./CartModal"
import {clicked1, clicked2} from '../features/buttons/clickedStateSlice'
import { motion, AnimatePresence } from 'framer-motion';
import HamburgerDropdown from "./HamburgerDropdown"



const Navbar = () => {

  const cartClick = useSelector((state: RootState) => state.addProductBtn.click1)
  const hamburgerClick = useSelector((state: RootState) => state.addProductBtn.click2)

  const totalQuant = useSelector((state: RootState) => state.cart.totalQuantity)

  console.log("CAAAAAAART STATE", totalQuant)

  const dispatch = useDispatch()

  return (
    <header className="bg-secondary-100 h-20 flex justify-center relative items-center px-6 md:px-10 lg:px-40 w-auto">
     <AnimatePresence>
     {cartClick && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => dispatch(clicked1())}
            />
            <motion.div
              className="bg-white absolute right-4 top-20 rounded-md z-20"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <CartModal />
            </motion.div>
          </>
        )}
     </AnimatePresence>
        
      
      
      <div className="flex justify-between items-center flex-grow px-4">
        <img className="block lg:hidden" src={Hamburger} alt="Hamburger menu" onClick={() => dispatch(clicked2())}/>
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
        
      <div 
      className="h-full w-12 flex justify-end relative pr-5 items-center"
      onClick={() => dispatch(clicked1())}
      >
        {totalQuant && totalQuant >= 1 ? (
          <div className="h-5 flex justify-center items-center bottom-3 right-2 rounded-full w-5 bg-primary-100 absolute">
          <p className="text-14 font-bold text-white">{totalQuant}</p>
        </div>

        ): ""}
       <img src={Cart} alt="Cart"/>
      </div>
      </div>

      <AnimatePresence>
     {hamburgerClick && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => dispatch(clicked2())}
            />
            <motion.div
              className="bg-white absolute top-20 rounded-md z-20 w-full"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.3 }}
            >
              <HamburgerDropdown/>
            </motion.div>
          </>
        )}
     </AnimatePresence>
      
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
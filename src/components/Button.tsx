import {ButtonProps} from '../utils/interfaces'
/* import { clicked } from '../features/buttons/addPruductButtonSlice' */
import { addItem } from '../features/cart/cartSlice'
/* import { RootState } from '../app/store' */
import { useDispatch } from 'react-redux'


const Button: React.FC<ButtonProps> = ({variant, children, product}) => {

  /* const btnClick = useSelector((state: RootState) => state.addProductBtn.value) */
  const dispatch = useDispatch()

 /*  console.log("btnClick" ,btnClick) */

    const baseStyle = "py-4 px-5 font-bold tracking-1"

    const variants = {
        orange: "bg-primary-100 text-white hover:bg-primary-200",
        black: "bg-black text-white hover:bg-secondary-400",
        border: "bg-none text-black border border-black hover:bg-black hover:text-white"
    }

    const variantClasses = variants[variant] || "bg-gray-200 hover:bg-gray-400"

  return (
    <>
    <p></p>
        <button 
        onClick={() => {
          if(children === "ADD TO CART" && product){
            dispatch(addItem(product))}
          }
        }
        
          className={`${baseStyle} ${variantClasses}`}
          >
        {children}
      </button>
    </>
  )
}

export default Button


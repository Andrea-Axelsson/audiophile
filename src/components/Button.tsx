import { ButtonProps } from '../utils/interfaces'
import { addItem } from '../features/cart/cartSlice'
import { useDispatch } from 'react-redux'

/* Button component with props from ButtonProps interface */
const Button: React.FC<ButtonProps> = ({ variant, children, product }) => {

  /* Hook to get the dispatch function from Redux store */
  const dispatch = useDispatch()

  /* Base styles for the button */
  const baseStyle = "py-4 px-5 font-bold tracking-1 transition duration-300"

  /* Different style variants for the button */
  const variants = {
    orange: "bg-primary-100 text-white hover:bg-primary-200",
    black: "bg-black text-white hover:bg-secondary-400",
    border: "bg-none text-black border border-black hover:bg-black hover:text-white"
  }

  /* Determine the classes to apply based on the variant prop */
  const variantClasses = variants[variant] || "bg-gray-200 hover:bg-gray-400"

  return (
    <>
      <p></p>
      <button 
        onClick={() => {
          if (children === "ADD TO CART" && product) {
            dispatch(addItem(product))
          }
        }}
        className={`${baseStyle} ${variantClasses}`}
      >
        {children}
      </button>
    </>
  )
}

export default Button
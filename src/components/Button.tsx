import ButtonProps from '../utils/interfaces'

const Button: React.FC<ButtonProps> = ({variant, children}) => {

    const baseStyle = "py-4 px-5 font-bold tracking-1"

    const variants = {
        orange: "bg-primary-100 text-white hover:bg-primary-200",
        black: "bg-black text-white hover:bg-secondary-400",
        border: "bg-none text-black border border-black hover:bg-black hover:text-white"
    }

    const variantClasses = variants[variant] || "bg-gray-200 hover:bg-gray-400"

  return (
    <>
        <button className={`${baseStyle} ${variantClasses}`}>
        {children}
      </button>
    </>
  )
}

export default Button


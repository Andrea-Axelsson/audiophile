/* Define the props for the Button component */
interface ButtonProps {
  amount: number,
  onIncrement: () => void,
  onDecrement: () => void,
  isInsideCartModal: boolean,
}

const AddRemoveItem: React.FC<ButtonProps> = ({ amount, onIncrement, onDecrement, isInsideCartModal }) => {

  return (
    <div className="flex">
       
      <button onClick={onDecrement} className={`${isInsideCartModal ? 'py-1 px-2 md:py-4 md:px-5' : 'py-4 px-5'} bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black transition duration-300`}>
        -
      </button>
     
      <div className={`${isInsideCartModal ? 'py-1 px-2 md:py-4 md:px-5' : 'py-4 px-5'} bg-secondary-200 text-14 tracking-1 font-bold text-gray-500`}>
        {amount}
      </div>
      
      <button onClick={onIncrement} className={`${isInsideCartModal ? 'py-1 px-2 md:py-4 md:px-5' : 'py-4 px-5'} bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black transition duration-300`}>
        +
      </button>
    </div>
  )
}

export default AddRemoveItem

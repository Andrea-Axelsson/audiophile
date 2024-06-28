/* Define the props for the Button component */
interface ButtonProps {
  amount: number,
  onIncrement: () => void
  onDecrement: () => void
}

const AddRemoveItem: React.FC<ButtonProps> = ({ amount, onIncrement, onDecrement }) => {

  return (
    <div className="flex">
       
      <button onClick={onDecrement} className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black transition duration-300">
        -
      </button>
     
      <div className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500">
        {amount}
      </div>
      
      <button onClick={onIncrement} className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black transition duration-300">
        +
      </button>
    </div>
  )
}

export default AddRemoveItem

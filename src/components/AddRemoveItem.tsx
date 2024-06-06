const AddRemoveItem = () => {
  return (
    <div className="flex">
       {/* Button to decrement itemNumber. It's disabled when itemNumber is 0 or less */}
      <button /* onClick={handleDecreaseQuantity} */ className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black">
        -
      </button>
      {/* Display the current value of itemNumber */}
      <div className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500">
        0
      </div>
      {/* Button to increment itemNumber */}
      <button /* onClick={handleAddToCart} */ className="py-4 px-5 bg-secondary-200 text-14 tracking-1 font-bold text-gray-500 hover:bg-gray-400 hover:text-black">
        +
      </button>
    </div>
  )
}

export default AddRemoveItem
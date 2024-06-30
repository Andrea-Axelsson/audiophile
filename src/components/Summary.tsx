import CartItem from './CartItem'  
import { RootState } from "../app/store"
import { useSelector, useDispatch } from "react-redux"
import { clickedThankToyModal } from '../features/buttons/clickedStateSlice'

const Summary = () => {

  /* Selectors to get cart items and total sum from Redux store */
  const cart = useSelector((state: RootState) => state.cart.items)
  const totSum = useSelector((state: RootState) => state.cart.totalSum)
  const dispatch = useDispatch()

  return (
    <section className="rounded-md h-full w-full mx-6 my-6 lg:my-0 bg-white">
      <article className='p-6 flex flex-col'>
        <article className='flex justify-between'>
          <p className='text-18 font-bold mb-6'>Summary</p>
        </article>

        <section>
          {/* Map through the cart items and render a CartItem component for each */}
          {cart.map((item) => (
            <CartItem key={item.id} item={item} isInsideCartModal={false} />
          ))}
        </section>

        <article className='flex justify-between'>
          <p className='text-15 text-gray-500'>TOTAL</p>
          <p className='text-18 font-bold'>$ {totSum}</p>
        </article>
        <article className='flex justify-between'>
          <p className='text-15 text-gray-500'>SHIPPING</p>
          <p className='text-18 font-bold'>$ 50</p>
        </article>
        <article className='flex justify-between'>
          <p className='text-15 text-gray-500'>VAT (INCLUDED)</p>
          <p className='text-18 font-bold'>$ {(totSum * 0.2).toFixed(2)}</p>
        </article>
        <article className='flex justify-between my-6'>
          <p className='text-15 text-gray-500'>TOTAL</p>
          <p className='text-18 font-bold text-primary-100'>$ {totSum + 50}</p>
        </article>
        
        {/* Conditional rendering for the continue and pay button based on the cart length */}
        {cart.length > 0 && (
          <button onClick={() => dispatch(clickedThankToyModal())} className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200 duration-300">
            CONTINUE & PAY
          </button>
        )}
        {!cart.length && (
          <button disabled className="py-4 px-5 bg-gray-400 text-14 tracking-1 font-bold text-white hover:bg-gray-500 duration-300">
            CART IS EMPTY
          </button>
        )}
      </article>
    </section>
  )
}

export default Summary
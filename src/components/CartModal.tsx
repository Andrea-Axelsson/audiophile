import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { RootState } from "../app/store"
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { clickedCart } from "../features/buttons/clickedStateSlice"

const Cart: React.FC = () => {

    /* Hook to get the dispatch function from Redux store */
    const dispatch = useDispatch()

    /* Handler for the click event to dispatch clickedCart action */
    const handleClick = () => {
        dispatch(clickedCart())
    }

    /* Selectors to get cart items, total quantity, and total sum from the Redux state */
    const cart = useSelector((state: RootState) => state.cart.items)
    const totalQuant = useSelector((state: RootState) => state.cart.totalQuantity)
    const totSum = useSelector((state: RootState) => state.cart.totalSum)

    return (
        <section className='flex justify-end '>
            <article className='p-6 flex flex-col min-w-64'>
                <article className='flex justify-between'>
                    <p className='text-18 font-bold mb-6'>Cart ({totalQuant})</p>
                    <button onClick={() => dispatch(clearCart())} className='text-15 text-gray-500 mb-6 underline'>Remove all</button>
                </article>
                
                {/* Map through the cart items and render a CartItem component for each */}
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} isInsideCartModal={true} />
                ))}

                <article className='flex justify-between'>
                    <p className='text-15 text-gray-500 mb-6'>TOTAL</p>
                    <p className='text-18 font-bold mb-6'>$ {totSum}</p>
                </article>
                <Link to="/checkout">
                    {/* Conditional rendering for the checkout button based on the cart length */}
                    {cart.length > 0 && (
                        <button onClick={handleClick} className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200 w-full cursor-pointer">
                            CHECKOUT
                        </button>
                    )}
                    {!cart.length && (
                        <button disabled className="py-4 px-5 bg-gray-400 text-14 tracking-1 font-bold text-white hover:bg-gray-500 w-full transition duration-300 cursor-pointer">
                            CART IS EMPTY
                        </button>
                    )}
                </Link>
            </article>
        </section>
    )
}

export default Cart
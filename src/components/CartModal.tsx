
import { Link } from 'react-router-dom';
import CartItem from './CartItem';  
import { RootState } from "../app/store"
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'


const Cart: React.FC = () => {

    const dispatch = useDispatch()

    const cart = useSelector((state: RootState) => state.cart.items)
    const totalQuant = useSelector((state: RootState) => state.cart.totalQuantity)
    const totSum = useSelector((state: RootState) => state.cart.totalSum)
    
    return (
        <section className='flex justify-end'>
            <article className='p-6 flex flex-col'>
                <article className='flex justify-between'>
                    <p className='text-18 font-bold mb-6'>Cart ({totalQuant})</p>
                    <button onClick={() => dispatch(clearCart())} className='text-15 text-gray-500 mb-6 underline'>Remove all</button>
                </article>
                
                {cart.map ((item) =>(
                    <CartItem key={item.id} item={item}/>
                ))}
                    
          
                
                <article className='flex justify-between'>
                    <p className='text-15 text-gray-500 mb-6'>TOTAL</p>
                    <p className='text-18 font-bold mb-6'>$ {totSum}</p>
                </article>
                <Link to="/checkout">
                    <button className="py-4 px-5 bg-primary-100 text-14 tracking-1 font-bold text-white hover:bg-primary-200 w-full">
                        CHECKOUT
                    </button>
                </Link>
            </article>

        
        </section>

    )
}

export default Cart
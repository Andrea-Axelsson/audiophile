import AddRemoveItem from "./AddRemoveItem"
import { useDispatch } from 'react-redux'
import { incrementQuantity, decrementQuantity } from '../features/cart/cartSlice'

/* Define the props for the CartItem component */
interface ItemProps {
  item:{
    id: number,
    name: string,
    image: string,
    price: number,
    quantity: number
  },
  isInsideCartModal: boolean
    
}

const CartItem: React.FC<ItemProps> = ({item, isInsideCartModal}) => {

/* Hook to get the dispatch function from Redux store */
  const dispatch = useDispatch()

  return (
    <article className='flex flex-row justify-between items-center gap-6 pb-6'>
        <article className='flex items-center'>
                <img
                className="rounded-md w-16 h-16 object-cover mr-6"
                src={item.image}
                ></img>
                <article className='flex flex-col'>
                    <p className='text-15 font-bold'>{item.name}</p>
                    <p className='text-14 font-bold text-gray-500'>$ {item.price}</p>
                </article>
        </article>
                
                {!isInsideCartModal ? (
                  <p className='text-14 font-bold text-gray-500'>x {item.quantity}</p>
                ) : (
                      <AddRemoveItem
                      isInsideCartModal={isInsideCartModal}
                        amount={item.quantity}
                        onIncrement={() => dispatch(incrementQuantity(item.id))}
                        onDecrement={() => dispatch(decrementQuantity(item.id))}
                        />
                )}
            </article>
  )
}

export default CartItem
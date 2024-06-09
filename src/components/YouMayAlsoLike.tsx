import Button from './Button'
import { Product } from '../utils/interfaces'
import {Link} from 'react-router-dom'

interface ProductDisplayProps{
  products: Product[];
}

const YouMayAlsoLike:React.FC<ProductDisplayProps> = ({products}) => {

  const youMayAlsoLikeArr = products[0].others

  return (
    <>
    <h1 className="text-black text-24 font-bold mt-32 md:text-32 flex justify-center">
        YOU MAY ALSO LIKE
      </h1>
      <section className='mx-6 md:mx-10 lg:mx-40 mt-9 w-auto flex flex-col lg:flex-row gap-6'>
      {youMayAlsoLikeArr.map((arr) => 
   
        <section className="w-full py-6 flex flex-col justify-center items-center">
          <img
          className="rounded-md w-full object-contain mb-6"
          src={arr.image.mobile}
          ></img>
          <h1 className="text-black text-24 font-bold mb-6 text-center">
          {arr.name}
          </h1>
          <Link to={`/product/${arr.slug}`}>
            <Button
            variant="orange"
            >
            SEE PRODUCT
            </Button>
          </Link>
          
        </section>
        

      )}
      </section>
      
    </>
    
    
  )
}

export default YouMayAlsoLike
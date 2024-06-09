import { Product } from '../utils/interfaces'

interface ProductDisplayProps{
  products: Product[];
}

const ProductImageGrid: React.FC<ProductDisplayProps> = ({products}) => {
  return (
    <section className="mx-6 md:mx-10 lg:mx-40 mt-9 grid grid-cols-1 md:grid-cols-2 gap-5">

  <div className="flex flex-col gap-5">
    <img
      className="rounded-md w-full object-cover flex-1"
      src={products[0].gallery.first.mobile}
    />
    <img
      className="rounded-md w-full object-cover flex-1"
      src={products[0].gallery.second.mobile}
    />
  </div>
  
  <img
    className="rounded-md w-full object-cover flex-1"
    src={products[0].gallery.third.mobile}
  />
</section>
  )
}

export default ProductImageGrid
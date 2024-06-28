import React from 'react'
import Button from './Button'
import { Link } from "react-router-dom"
import {Product} from '../utils/interfaces'

/* Define the props for the CategoryProductDisplay component */
interface CategoryProductDisplayProps {
  products: Product[];
}

const CategoryProductDisplay:React.FC<CategoryProductDisplayProps> = ({products}) => {

  return (
    <>
    {products.map((product, index) => (
  <article key={product.id}
  className={`mx-6 md:mx-10 lg:mx-40 w-auto flex flex-col justify-center gap-8 items-center md:mt-32 lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
    >
      <figure className="rounded-md lg:flex-1 lg:h-full w-full bg-center flex justify-center items-center bg-cover bg-no-repeat bg-secondary-200 md:h-60">
      <img
          src={product.categoryImage.desktop}
          
          alt="Product image"
          className="h-full rounded-md"
        />
      </figure>
     
      <section className="flex lg:w-1/2 lg:px-10 flex-col justify-center text-center lg:text-left gap-8 lg:items-start">
      {product.new && <span className="text-primary-100 text-14 tracking-10">
            NEW PRODUCT
          </span>}
          
        <h1 className="font-manrope  font-bold text-28">{product.name}</h1>
        <h2 className="font-manrope text-black text-opacity-50 text-18">
        {product.description}
        </h2>

        <Link to={`/product/${product.slug}`}>
            <Button variant="orange">
                SEE PRODUCT
            </Button>
        </Link>
      </section>
    </article>
))}
    </>

    
  )
}

export default CategoryProductDisplay
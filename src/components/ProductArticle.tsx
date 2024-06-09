import React from 'react'
import {Link} from "react-router-dom"
import Button from "./Button"
import AddRemoveItem from "./AddRemoveItem"
import { Product } from '../utils/interfaces'

interface ProductDisplayProps{
  products: Product[];
}


const ProductArticle:React.FC<ProductDisplayProps>  = ({products}) => {

  return (
    <section className="mx-6 md:mx-10 lg:mx-40 w-auto my-6 md:mt-32 flex items-center">
        <article className="flex flex-col md:flex-row items-center">
          <article className="flex flex-col w-full lg:w-1/2">
            <Link
              to="/"
              className="mb-6 opacity-50 text-15 hover:cursor-pointer"
            >
              Go Back
            </Link>
            <img
              className="rounded-md min-w-72 w-auto object-cover"
              src={products[0].image.mobile}
            ></img>
          </article>

          <article className="flex flex-col md:ml-16">
            <article className="flex flex-col justify-start items-start lg:text-left lg:justify-start lg:items-start">
              {products[0].new && (<p className="opacity-50 text-primary-100 text-14 tracking-10 my-6">
                NEW PRODUCT
              </p>)}

              <h1 className="text-black text-40 font-bold mb-6 md:text-56">
                {products[0].name}
              </h1>
              <p className="text-black text-15 leading-25 mb-6 w-full lg:w-[600px]">
              {products[0].description}
              </p>
              <p className="text-black font-bold text-18 leading-25 mb-6">
              {`$ ${products[0].price}`}
              </p>
            </article>

            <article className="flex gap-6 justify-start items-center">
              <AddRemoveItem/>
              <Button
              variant="orange"
              >
                ADD TO CART
              </Button>
            </article>
          </article>
        </article>
      </section>
  )
}

export default ProductArticle
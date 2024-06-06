import {Link} from "react-router-dom"
import Button from "./Button"
import AddRemoveItem from "./AddRemoveItem"

const ProductArticle = () => {
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
              src="assets\product-xx59-headphones\mobile\image-product.jpg"
            ></img>
          </article>

          <article className="flex flex-col md:ml-16">
            <article className="flex flex-col justify-start items-start lg:text-left lg:justify-start lg:items-start">
              {/* {text.new && (<p className="opacity-50 text-primary-100 text-14 tracking-10 my-6">
                NEW PRODUCT
              </p>)} */}

              <h1 className="text-black text-40 font-bold mb-6 md:text-56">
                XX59
                Headphones
              </h1>
              <p className="text-black text-15 leading-25 mb-6 w-full lg:w-[600px]">
              Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.
              </p>
              <p className="text-black font-bold text-18 leading-25 mb-6">
              $ 899
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
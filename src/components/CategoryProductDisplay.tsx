import Button from './Button'
import {Link} from "react-router-dom"

/* Fixa rätt bilder för rätt storlek, då behöver du inte ha t.ex md:h-80  w-full på bilden*/

const CategoryProductDisplay = () => {
  return (

    <article
      className="mx-6 md:mx-10 lg:mx-40 w-auto flex flex-col justify-center gap-8 items-center p-5 md:mt-32 lg:flex-row"
    >
      <img
          src="assets\product-xx99-mark-two-headphones\desktop\image-category-page-preview.jpg"
          alt="Product image"
          className="lg:w-1/2 rounded-md md:h-80  w-full object-cover "
        />
      <section className="flex lg:w-1/2 lg:px-10 flex-col justify-center text-center lg:text-left gap-8 lg:items-start">
          <span className="text-primary-100 text-14 tracking-10">
            NEW PRODUCT
          </span>
        <h1 className="font-manrope  font-bold text-28">XX99 Mark II
Headphones</h1>
        <h2 className="font-manrope text-black text-opacity-50 text-18">
        The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.
        </h2>

        <Link to="/product">
            <Button variant="orange">
                SEE PRODUCT
            </Button>
        </Link>
      </section>
    </article>
  )
}

export default CategoryProductDisplay
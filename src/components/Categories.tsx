/* import { Link } from "react-router-dom"; */
import Shopbutton from "./ShopButton"
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png"

const Categories = () => {
  return (

<section className="w-auto flex flex-col md:flex-row justify-center items-center mx-6 md:mx-10 lg:mx-40 gap-6">

<section className="bg-secondary-200 h-40 w-full rounded-md p-8 mt-24 relative flex justify-end items-center text-center flex-col">
        <figure className="w-32 max-w-48 absolute bottom-20">
            <img src={headphones} alt="Productimg" />
        </figure>
        <div className="flex flex-col">
            <h1 className="font-manrope font-bold text-[15px] tracking-1">
            HEADPHONES
            </h1>
            <Shopbutton/>
        </div>
        
    </section>

    <section className="bg-secondary-200 h-40 w-full rounded-md p-8 mt-24 relative flex justify-end items-center text-center flex-col">
        <figure className="w-32 max-w-48 absolute bottom-20">
            <img src={headphones} alt="Productimg" />
        </figure>
        <div className="flex flex-col">
            <h1 className="font-manrope font-bold text-[15px] tracking-1">
            HEADPHONES
            </h1>
            <Shopbutton/>
        </div>
        
    </section>

    <section className="bg-secondary-200 h-40 w-full rounded-md p-8 mt-24 relative flex justify-end items-center text-center flex-col">
        <figure className="w-32 max-w-48 absolute bottom-20">
            <img src={headphones} alt="Productimg" />
        </figure>
        <div className="flex flex-col">
            <h1 className="font-manrope font-bold text-[15px] tracking-1">
            HEADPHONES
            </h1>
            <Shopbutton/>
        </div>
        
    </section>
</section>

   

   /*  <section className="w-full flex flex-col bg-white rounded-md justify-center items-center p-8 px-3 md:flex-row md:gap-4">
      
      <article className="relative h-60 w-full">
    <figure className="w-32 max-w-48 absolute top-10">
      <img src={headphones} alt="Productimg" />
    </figure>
    <section className="h-[30%]"></section>

    <section className="rounded-md bg-secondary-200 h-40">
      <section className="w-full h-full flex flex-col justify-end pb-2 items-center">
        <h1 className="font-manrope font-bold text-[15px] tracking-1">
          HEADPHONES
        </h1>
        <Shopbutton/>
      </section>
    </section>
  </article>


    </section> */


    
  )
}

export default Categories
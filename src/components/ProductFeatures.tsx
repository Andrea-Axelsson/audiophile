const ProductFeatures = () => {
  return (
    <section className="w-full px-6 pb-6 lg:px-40 flex justify-between items-center">
      <article className="flex flex-col lg:flex-row lg:justify-start lg:gap-32">
        <article className="mt-20 lg:w-1/2">
          <h1 className="text-black text-24 font-bold mb-6 md:text-32">
            FEATURES
          </h1>
          <p className="text-black text-15 leading-25 mb-6 w-full">
          These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

            More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.
          </p>
        </article>
        <article className="mt-20 flex flex-col md:flex-row lg:flex-col">
          <h1 className="text-black text-24 font-bold mb-6 md:text-32">
            IN THE BOX
          </h1>
          <article className="md:ml-[20vw] lg:m-0">
               <p className="text-black text-15 leading-25 mb-2 w-full">
               <span className="text-primary-100 text-15 font-bold leading-25 mr-6">
               1x
               </span>
               Headphone Unit
             </p>
          </article>
        </article>
      </article>
    </section>
  )
}

export default ProductFeatures
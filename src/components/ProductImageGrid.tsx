const ProductImageGrid = () => {
  return (
    <section className="mx-6 md:mx-10 lg:mx-40 mt-9 grid grid-cols-1 md:grid-cols-2 gap-5">

  <div className="flex flex-col gap-5">
    <img
      className="rounded-md w-full object-cover flex-1"
      src="assets/product-xx59-headphones/mobile/image-gallery-1.jpg"
    />
    <img
      className="rounded-md w-full object-cover flex-1"
      src="assets\product-xx59-headphones\mobile\image-gallery-2.jpg"
    />
  </div>
  
  <img
    className="rounded-md w-full object-cover flex-1"
    src="assets/product-xx59-headphones/mobile/image-gallery-3.jpg"
  />
</section>
  )
}

export default ProductImageGrid
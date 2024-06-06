import Button from './Button'

const YouMayAlsoLike = () => {
  return (
    <>
    <h1 className="text-black text-24 font-bold mt-32 md:text-32 flex justify-center">
        YOU MAY ALSO LIKE
      </h1>
      <section className='mx-6 md:mx-10 lg:mx-40 mt-9 w-auto flex flex-col lg:flex-row gap-6'>
        
        <section className="w-full py-6 flex flex-col justify-center items-center">
      <img
        className="rounded-md w-full object-contain mb-6"
        src="public\assets\shared\mobile\image-xx99-mark-one-headphones.jpg"
      ></img>
      <h1 className="text-black text-24 font-bold mb-6 text-center">
      XX99 MARK I
      </h1>
      <Button
      variant="orange"
      >
        SEE PRODUCT
      </Button>
    </section>
        <section className="w-full py-6 flex flex-col justify-center items-center">
      <img
        className="rounded-md w-full object-contain mb-6"
        src="public\assets\shared\mobile\image-xx99-mark-one-headphones.jpg"
      ></img>
      <h1 className="text-black text-24 font-bold mb-6 text-center">
      XX99 MARK I
      </h1>
      <Button
      variant="orange"
      >
        SEE PRODUCT
      </Button>
    </section>
        <section className="w-full py-6 flex flex-col justify-center items-center">
      <img
        className="rounded-md w-full object-contain mb-6"
        src="public\assets\shared\mobile\image-xx99-mark-one-headphones.jpg"
      ></img>
      <h1 className="text-black text-24 font-bold mb-6 text-center">
      XX99 MARK I
      </h1>
      <Button
      variant="orange"
      >
        SEE PRODUCT
      </Button>
    </section>
    </section>
    </>
    
    
  )
}

export default YouMayAlsoLike
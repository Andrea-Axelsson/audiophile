import Button from "./Button"
import { Link } from "react-router-dom"


const ProductHighlightSpeakerOrange = () => {
  return (

      <article className="mx-6 md:mx-10 lg:mx-40 w-auto mt-32 bg-primary-100 rounded-md h-auto lg:relative lg:overflow-hidden">
        <article className='bg-[url("/assets/home/desktop/pattern-circles.svg")] bg-bottom bg-no-repeat lg:bg-left-top'>
          <article className="flex flex-col justify-center items-center text-center py-20 lg:flex-row lg:gap-80 lg:relative lg:justify-end">
            <img
              className="w-44 lg:w-72 xl:w-96 lg:absolute lg:top-20 lg:left-40"
              src="/assets/home/mobile/image-speaker-zx9.png"
            ></img>

            <article className="flex flex-col justify-center items-center text-center lg:text-left lg:justify-start lg:items-start lg:pr-0 2xl:pr-40">
              <h1 className="text-white text-40 font-bold mb-6 md:text-56">
                ZX9 <br></br> SPEAKER
              </h1>
              <p className="text-white text-15 leading-25 mb-6 w-80 lg:w-96">
                Upgrade to premium speakers that are <br></br> phenomenally built to
                deliver truly <br></br> remarkable sound.
              </p>
              <Link to={"/product/zx9-speaker"}>
                <Button variant="black">
                SEE PRODUCT
                </Button>
              </Link>
              
            </article>


          </article>
        </article>
      </article>
  );
};

export default ProductHighlightSpeakerOrange;
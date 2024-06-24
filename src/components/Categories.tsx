import { Link } from "react-router-dom";
import Shopbutton from "./ShopButton"
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png"
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png"
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png"
import { useDispatch } from "react-redux"

import { clicked2 } from "../features/buttons/clickedStateSlice";



const Categories = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(clicked2());
  };

  return (

<section className="w-auto flex flex-col md:flex-row justify-center items-center mx-6 md:mx-10 lg:mx-40 gap-6 mb-32">

<section className="bg-secondary-200 h-40 w-full rounded-md p-8 mt-24 relative flex justify-end items-center text-center flex-col">
        <figure className="w-32 max-w-48 absolute bottom-20">
            <img src={headphones} alt="Productimg" />
        </figure>
        <div className="flex flex-col">
            <h1 className="font-manrope font-bold text-[15px] tracking-1">
            HEADPHONES
            </h1>
            <Link to={"/category/headphones"} onClick={handleClick}>
            <Shopbutton/>
            </Link>
            
        </div>
        
    </section>

    <section className="bg-secondary-200 h-40 w-full rounded-md p-8 mt-24 relative flex justify-end items-center text-center flex-col">
        <figure className="w-32 max-w-48 absolute bottom-20">
            <img src={speakers} alt="Productimg" />
        </figure>
        <div className="flex flex-col">
            <h1 className="font-manrope font-bold text-[15px] tracking-1">
            SPEAKERS
            </h1>
            <Link to={"/category/speakers"} onClick={handleClick}>
            <Shopbutton/>
            </Link>
        </div>
        
    </section>

    <section className="bg-secondary-200 h-40 w-full rounded-md p-8 mt-24 relative flex justify-end items-center text-center flex-col">
        <figure className="w-32 max-w-48 absolute bottom-20">
            <img src={earphones} alt="Productimg" />
        </figure>
        <div className="flex flex-col">
            <h1 className="font-manrope font-bold text-[15px] tracking-1">
            EARPHONES
            </h1>
            <Link to={"/category/earphones"} onClick={handleClick}>
            <Shopbutton/>
            </Link>
        </div>
        
    </section>
</section>
    
  )
}

export default Categories
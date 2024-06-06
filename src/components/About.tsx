/* import bgMob from "/assets/shared/mobile/image-best-gear.jpg";
import bgTab from "/assets/shared/tablet/image-best-gear.jpg"; */
import bgDesk from "/assets/shared/desktop/image-best-gear.jpg";



const About = () => {

    return (
      <article className="mx-6 md:mx-10 lg:mx-40 w-auto flex flex-col lg:flex-row-reverse gap-6 my-32">
        
        <img className="rounded-md shadow-md md:h-72 w-full lg:w-1/2 object-cover" src={bgDesk} alt="About image"/>
     

        <section className="w-full lg:w-1/2 flex flex-col justify-center items-center">
          <h1 className="font-manrope text-28 tracking-1 text-center lg:text-start py-6 text-black font-bold md:text-40">
            BRINGING YOU THE <span className="text-primary-100">BEST</span>{" "}
            AUDIO GEAR
          </h1>
          <p className="font-manrope lg:text-start md:text text-14 font-medium text-center text-secondary-100 text-opacity-50">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </section>
      </article>
    );
};

export default About;
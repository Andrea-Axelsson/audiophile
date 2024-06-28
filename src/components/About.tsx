import bgMob from "/assets/shared/mobile/image-best-gear.jpg"

const About = () => {

    return (
      // Main article container with responsive margin, width, flex, and gap styling
      <article className="mx-6 md:mx-10 lg:mx-40 w-auto flex flex-col lg:flex-row-reverse gap-6 my-32">
        
        {/* Image with rounded corners, shadow, responsive height, and object cover */}
        <img className="rounded-md shadow-md md:h-72 w-full lg:w-1/2 object-cover" src={bgMob} alt="About image"/>
     
        {/* Section containing the heading and paragraph with responsive text alignment and styling */}
        <section className="w-full lg:w-1/2 flex flex-col justify-center items-center">

           {/* Heading with custom font, text size, tracking, alignment, and color */}
          <h1 className="font-manrope text-28 tracking-1 text-center lg:text-start py-6 text-black font-bold md:text-40">
            BRINGING YOU THE <span className="text-primary-100">BEST</span>{" "}
            AUDIO GEAR
          </h1>

          {/* Paragraph with custom font, text size, alignment, and color */}
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
    )
}

export default About
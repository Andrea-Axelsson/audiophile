import { Link } from "react-router-dom"
import Logo from "/assets/shared/desktop/logo.svg"

const Footer = () => {
  return (
    <footer className="bg-secondary-100 h-auto">
      <section className="px-12 md:px-40 pt-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-10">
          
          {/* Logo section */}
          <div className="w-full h-full flex justify-center items-center md:justify-start">
            <Link to={"/"}>
              <img src={Logo} alt="Soundboom Logo" className="mt-4 mb-4 max-w-60 md:max-w-96" />
            </Link>
          </div>
          
          {/* Navigation links */}
          <ul className="text-white font-bold text-13 flex items-center justify-center flex-col uppercase gap-4 pb-12 md:flex-row md:justify-start lg:pb-0">
            <Link to={"/"} className="tracking-2 hover:text-primary-100 duration-300">
              Home
            </Link>
            <Link
              to={"/category/headphones"}
              className="tracking-2 cursor-pointer hover:text-primary-100 duration-300"
            >
              Headphones
            </Link>
            <Link
              to={"/category/speakers"}
              className="tracking-2 cursor-pointer hover:text-primary-100 duration-300"
            >
              Speakers
            </Link>
            <Link
              to={"/category/earphones"}
              className="tracking-2 cursor-pointer hover:text-primary-100 duration-300"
            >
              Earphones
            </Link>
          </ul>
        </div>

        {/* Company description */}
        <p className="text-white font-medium text-15 text-center opacity-50 leading-25 pb-12 md:text-left lg:w-6/12">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Copyright notice */}
          <p className="text-white font-bold text-15 text-center opacity-50 leading-25 pb-12">
            Copyright 2021. All Rights Reserved
          </p>

          {/* Social media icons */}
          <article className="flex items-center justify-center gap-4 pb-12">
            <img
              src="/assets/shared/desktop/icon-twitter.svg"
              alt="twitter icon"
              className="cursor-pointer"
            />
            <img
              src="/assets/shared/desktop/icon-instagram.svg"
              alt="instagram icon"
              className="cursor-pointer"
            />
            <img
              className="cursor-pointer"
              src="/assets/shared/desktop/icon-facebook.svg"
              alt="facebook icon"
            />
          </article>
        </div>
      </section>
    </footer>
  );
};

export default Footer
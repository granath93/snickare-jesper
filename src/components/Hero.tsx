import Underline from "./Underline";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <div
      id="home"
      className="relative top-0 flex flex-col hero w-full h-screen"
    >
      <div className="absolute inset-0 bg-black/55 flex flex-col">
        <div className="flex flex-col self-center m-auto w-full px-8 sm:px-0 sm:w-2/3 w-1/5">
          <h1 className="flex flex-col my-4 md:my-0">
            <span className="block text-md md:text-2xl lg:text-3xl font-inter font-normal">Snickare Jesper Pettersson</span>
            <span>

              <span className="mr-0 md:mr-4 font-semibold text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-thin">Bygger, renoverar och underhåller</span>
              <span className="block md:inline-flex text-xs md:text-md lg:text-lg xl:text-xl font-inter font-bold">I Alingsås</span>
            </span>
          </h1>
          <a href="#contact" className="button-lookalike primary mt-4">
            Kontakta
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

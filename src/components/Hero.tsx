import { FC } from "react";
import Underline from "./Underline";

const Hero: FC = () => {
  return (
    <div
      id="home"
      className="relative top-0 flex flex-col hero w-full h-screen"
    >
      <div className="absolute inset-0 bg-black/55 flex flex-col">
        <div className="flex flex-col self-center m-auto w-full px-8 sm:px-0 sm:w-2/3">
          <h1 className="flex flex-col my-4 md:my-0">
            <Underline>
              <span className="block text-md md:text-xl lg:text-2xl font-inter font-normal mb-0 md:mb-1">Snickare Jesper Pettersson | Alingsås</span>
            </Underline>
              <span className="mr-0 md:mr-4 mt-8 font-semibold text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-thin">Bygger, renoverar och underhåller</span>
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

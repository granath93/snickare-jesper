import Underline from "./Underline";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative top-0 flex flex-col hero w-full h-screen"
    >
      <div className="absolute inset-0 bg-black/50 flex flex-col">
        <div className="flex flex-col self-center m-auto w-full px-8 sm:px-0 sm:w-2/3">
          <Underline>
            <p className="text-2xl md:text-4xl">Snickare Jesper Pettersson</p>
          </Underline>
          <h1 className="leading-14 my-4 md:my-0 md:leading-tight">
            Bygger, renoverar och underhåller
          </h1>
          <a href="#contact" className="button-lookalike mt-4">
            Kontakta
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

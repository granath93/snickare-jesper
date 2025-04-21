import Image from "next/image";
import Section from "./Section";

const Library = () => {
  return (
    <Section id="library" title="Arbeten">
      <p className="w-full md:w-3xl  max-w-full">
        Under året har Jesper fått tillfället att hjälpa både privatpersoner och
        företag med olika snickeriprojekt. Här nedan finns några exempel.
      </p>
      <Image alt="Bild på jesper" src="/jesper.png" width={300} height={100} />
    </Section>
  );
};

export default Library;

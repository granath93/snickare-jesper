import Image from "next/image";
import Section from "./Section";
import { libraryResources } from "@/libraryResources";


const Library = () => {

  return (
    <Section id="library" title="Arbeten">
      <p className="w-full md:w-3xl  max-w-full">
        Under året har Jesper fått tillfället att hjälpa både privatpersoner och
        företag med olika snickeriprojekt. Här nedan finns några exempel.
      </p>
      <div className="inline-flex flex-wrap justify-center ml-[calc(-48vw_+_50%)] w-[96vw]">
        {libraryResources.map((item) => <div className="flex flex-col items-center gap-2"><Image title={item.title} key={item.imageUrl} alt={item.alt} src={item.imageUrl} width={366} height={366} /><p className="italic">{item.title}</p></div>)}
      </div>
    </Section>
  );
};

export default Library;

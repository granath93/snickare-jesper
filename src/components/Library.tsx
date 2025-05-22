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
      <div className="inline-flex flex-wrap justify-start gap-6">
        {libraryResources.map((item) =>
          <div key={item.imageUrl} className="flex flex-col items-center gap-2">
            <Image title={item.title} alt={item.alt} src={item.imageUrl} width={366} height={366} />
            <p className="italic">{item.title}</p>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Library;
